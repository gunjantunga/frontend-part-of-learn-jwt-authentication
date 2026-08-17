import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "./store/authStore";

function Login() {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const setTokens = useAuthStore((state) => state.setTokens);
    const navigate = useNavigate();


    async function login() {


        try {

            let response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })

            if (response.ok) {
                //  if(response.headers.get("Content-Type").includes("application/json)

                let data = await response.json()
                // lets store the tokens in local storage
                setTokens(data.accessToken, data.refreshToken)
                navigate("/customer")
            } else {

            }



        } catch (error) {
            console.log(error);
        }


    }

    return (
        <div>
            <div style={{ margin: 100 }}>
                <h2>Login System</h2>

                <div>
                    <label>
                        Email :
                        <input type="text" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                    </label>
                </div>
                <div>

                    <label>
                        Password :
                        <input type="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                    </label>
                </div>
                <button onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login;

//