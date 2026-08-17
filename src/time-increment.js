import useBearAndSlothCounter from "./store/store";


function BearAndSlothCounter() {

    const bear = useBearAndSlothCounter(state => state.bear);
    const sloth = useBearAndSlothCounter(state => state.sloth);
    const incrementAnimal = useBearAndSlothCounter(state => state.incrementAnimal);
    const isLoading = useBearAndSlothCounter(state => state.isLoading);


    return (
        <div>
            {/* {isLoading ? "Loading..." : */}
            <>
                <h2>Bear: {bear}</h2>
                <h2>Sloth: {sloth}</h2>
                <button onClick={incrementAnimal}>Increment</button>
            </>
            {/* } */}
        </div>
    )

}


//
function foo() {
    const { incrementBear } = useBearAndSlothCounter.getState();

    incrementBear();
}


setTimeout(() => {
    foo();
}, 7000)

export default BearAndSlothCounter;


//