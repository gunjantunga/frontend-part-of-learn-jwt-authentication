import { useCounter } from "./zustand-store";


function Counter() {

    const count = useCounter(state => state.count);
    const increment = useCounter(state => state.increment);
    const decrement = useCounter(state => state.decrement);
    const reset = useCounter(state => state.reset);

    return (
        <div>

            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}

export default Counter;