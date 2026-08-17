import { useContext } from "react";
import { AuthContext } from "./provider";
import myfetch from "./my-fetch";



export function useFetch(url) {
    const { setAccessToken } = useContext(AuthContext);


    // return function () {
    //     setAccessToken("new access token");
    //     localStorage.setItem("accessToken", "new access token");
    // }

    return myfetch;
}


