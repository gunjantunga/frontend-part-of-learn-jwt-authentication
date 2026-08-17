import { useContext } from "react";
import { AuthContext } from "./provider.js";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";



function ProtectedRoute() {


    let { accessToken, refreshToken } = useContext(AuthContext);

    if (accessToken && refreshToken) {
        return <div>
            <Navbar />
            <Outlet />
        </div>
    } else {
        return <Navigate to="/login" />
    }

}

export default ProtectedRoute;

//