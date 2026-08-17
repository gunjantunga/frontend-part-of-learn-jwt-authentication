import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./provider";
import { useFetch } from "./my-fetch";

function HomePage() {


    const { accessToken } = useContext(AuthContext);

    const _fetch = useFetch()


    return (
        <div><h2>This is Home Page</h2>
            <Link to="/customer">Customers</Link>
            <button onClick={_fetch}>Update Token</button>
            <h2>Access Token: {accessToken}</h2>
        </div>
    )
}

export default HomePage;