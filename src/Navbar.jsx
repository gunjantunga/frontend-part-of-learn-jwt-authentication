
import { useAuthStore } from "./store/authStore";

function Navbar() {

    const logout = useAuthStore((state) => state.logout);

    return (
        <div style={{ width: "100%", height: 40, display: 'flex', justifyContent: "flex-end", backgroundColor: 'gray' }}>
            <button style={{ margin: 10, outline: "none", border: "none" }} onClick={logout}>Logout</button>
        </div>
    )
}

export default Navbar;

//