import { Link } from "react-router-dom";
import { myfetch } from "./my-fetch";
import { useAuthStore } from "./store/authStore";

function HomePage() {


    const accessToken = useAuthStore((state) => state.accessToken);





    return (
        <div><h2>This is Home Page</h2>
            <Link to="/customer">Customers</Link>
            <button onClick={myfetch}>Update Token</button>
            <h2>Access Token: {accessToken}</h2>
        </div>
    )
}

export default HomePage;