import { produce } from "immer";
import { useReducer } from "react";
import Button from "../components/Button";

const INCREMENT = 'increment';
const CHANGE_VALUE = 'change-value';
const DECREMENT = 'decrement';
const ADD_VALUE = 'add-value';
const reducer =(state, action) => {
    switch (action.type) {
        case INCREMENT:
            state.count=state.count+1;
            return;
        case CHANGE_VALUE:
            state.valueToAdd = action.payload;
            return;
        case DECREMENT:
            state.count=state.count-1;
            return;
        case ADD_VALUE:
            state.count=state.count+state.valueToAdd;
            state.valueToAdd=0;
            return;
        default:
            return;
    }
}
function CounterPage({initialCount}) {
    const[state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd:0
    });
    const increment = () => {
        dispatch({
            type: INCREMENT
        });
    }
    const decrement = () => {
        dispatch({
            type: DECREMENT
        })
    }
    const handleChange = (event) => {
        const value = parseInt(event.target.value)
        dispatch({
            type:CHANGE_VALUE,
            payload:value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_VALUE
        })
    }
    return(
        <div>
            <h1>count is{state.count}</h1>
            <Button primary onClick={increment}>increment</Button>
            <Button primary onClick={decrement}>decrement</Button>
            <form onSubmit={handleSubmit} >
                <label>Add a lot</label>
                <input value={state.valueToAdd || ''} onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300"/>
                <Button>Add it</Button>
            </form>
        </div>
    )
}

export default CounterPage;