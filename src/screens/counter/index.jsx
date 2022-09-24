import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented, multiplyed } from "../../redux/slices/counter";

const Counter = (props) => {

    const distpath = useDispatch();
    const state = useSelector((state) => state.reducer.value);

    const increment = () => {
        distpath(incremented())
    }

    const decrement = () => {
        distpath(decremented())
    }

    const multiply = () => {
        distpath(multiplyed())
    }

    return <div>
        <p>Count: {JSON.stringify(state)}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} >Decrement</button>
        <button onClick={multiply} >Multiply</button>
    </div>
}


export default Counter;