
import { useContext } from "react";
import { AuthContext } from "./provider";

function Navbar() {

    const { setAccessToken, setRefreshToken } = useContext(AuthContext);


    function clear() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setAccessToken(null);
        setRefreshToken(null);
    }


    return (
        <div style={{ width: "100%", height: 40, display: 'flex', justifyContent: "flex-end", backgroundColor: 'gray' }}>
            <button style={{ margin: 10, outline: "none", border: "none" }} onClick={clear}>Logout</button>
        </div>
    )
}

export default Navbar;

//