
const initialState = {
    title: "",
    count: 0
}

export function reducer (state = initialState, action) {

    console.log(action)

    if (action.type === "INCREMENT")  {
        return {...state, count: state.count + 1}
    }
    else if (action.type === "DECREMENT")  {
        return {...state, count: state.count - 1}
    }

    else return state
}