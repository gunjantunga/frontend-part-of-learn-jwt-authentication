import { useEffect } from "react";
import useCounterStore from "./async-counter-store";


function AsyncCounter() {

    const count = useCounterStore(state => state.count);
    const incrementAsync = useCounterStore(state => state.incrementAsync);
    const users = useCounterStore(state => state.users);
    const isLoading = useCounterStore(state => state.isLoading);
    const getUserData = useCounterStore(state => state.getUserData);



    useEffect(() => {
        getUserData();
    }, [])



    return (
        <div>
            <h2>Async: {count}</h2>
            <button onClick={incrementAsync}>+</button>

            <ul>
                {isLoading ? "Loading..." : users.map((item) => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}

export default AsyncCounter;


//