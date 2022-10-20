import {useDispatch} from "react-redux";
import {useState} from "react";


function MainPage(props) {

    const dispatch = useDispatch()




    const increment = () => {
        dispatch(
            {type: "INCREMENT",})
    }
    const decrement = () => {
        dispatch(
            {type: "DECREMENT",})
    }




    return (
        <>
            <h1>Main page</h1>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>

        </>
    );
}

export default MainPage;