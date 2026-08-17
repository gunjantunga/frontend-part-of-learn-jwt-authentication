
import { useAuthStore } from "./store/authStore";

async function parsebody(res) {

    let data = null;
    if (res.status === 204 || res.status === 205) return data;


    let contentType = res.headers.get("content-type") || "";
    if (contentType && contentType.includes("application/json")) {
        data = await res.json();
    } else {
        data = await res.text();
    }
    return data;
}

async function doRefresh(refreshToken) {
    let res;
    let data;

    try {
        res = await fetch("/refresh", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                refreshToken
            })
        })

        if (res.ok) {
            try {
                data = await parsebody(res)
            } catch (error) {
                return {
                    ok: false,
                    status: res.status,
                    message: "Invalid data, parsing failed"

                }
            }
        } else {
            if (res.status === 401) {
                return { ok: false, ststus: res.status, message: "Unauthorized" };
            } else {
                try {
                    data = await parsebody(res)
                } catch (error) {
                    return {
                        ok: false,
                        message: "Invalid data, parsing failed"
                    }
                }
                return {
                    ok: false,
                    status: res.status,
                    data
                }
            }
        }
    } catch (error) {
        return {
            ok: false,
            message: "Internet connection fail"
        }
    }

    return {
        ok: true,
        data,
        ststus: res.status
    }
}

let refreshPromise = null
function refreshOnce(refreshTokens) {
    if (!refreshPromise) {
        refreshPromise = doRefresh(refreshTokens).finally(() => {
            refreshPromise = null;
        })
    }

    return refreshPromise;

}

export async function myfetch(url, option = {}, retry = true) {


    const { setTokens, logout, accessToken } = useAuthStore.getState();

    const headers = new Headers(option.headers);
    if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`);

    //fetch throws error when timeout or network error

    let res;
    try {

        res = await fetch(url, {
            ...option,
            headers
        });

    } catch (err) {
        return { ok: false, message: "Internet connection fail" }
    }

    if (res.ok) {

        let data;
        try {
            data = await parsebody(res);

        } catch (err) {
            return { ok: false, status: res.status, message: "Invalid data, parsing failed" }
        }
        return { ok: true, status: res.status, data }
    } else {
        if (res.status === 401 && retry) {

            let refreshTokens = localStorage.getItem("refreshToken");
            if (!refreshTokens) {
                logout();
                return { ok: false, message: "Refresh token is missing" }
            }

            let refreshResponse = await refreshOnce(refreshTokens);
            if (refreshResponse.ok) {
                let token = refreshResponse.data;

                if (!token.accessToken || !token.refreshToken) {
                    logout();
                    return {
                        ok: false,
                        status: refreshResponse.status,
                        message: "Missing access tokens from server",
                        data: refreshResponse.data
                    }
                } else {
                    setTokens(token.accessToken, token.refreshToken);
                }
                return myfetch(url, option, false);
            } else {
                if (res.status === 401) {
                    logout();
                }
                return refreshResponse;
            }

        } else {
            let data;
            try {
                data = await parsebody(res);

            } catch (err) {
                return { ok: false, status: res.status, message: "Invalid data, parsing failed" }
            }
            return { ok: false, status: res.status, data }
        }
    }
}
