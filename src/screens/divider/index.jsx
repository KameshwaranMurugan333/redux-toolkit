import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Divider = (props) => {

    const dispatch =  useDispatch();
    const state = useSelector((state) => state);

    const divider = () => {

    }

    return <div>
        Divider:
        <p>Current Count: {JSON.stringify(state,null,2)}</p>
        <button onClick={divider}>Divider</button>
    </div>
}

export default Divider;