import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { useAuthStore } from "./store/authStore.js";



function ProtectedRoute() {


    const accessToken = useAuthStore((state) => state.accessToken);
    const refreshToken = useAuthStore((state) => state.refreshToken);


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