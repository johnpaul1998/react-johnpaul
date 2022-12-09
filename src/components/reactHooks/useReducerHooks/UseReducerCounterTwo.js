import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT': 
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'DECREMENT':
            return { ...state, firstCounter: state.firstCounter - action.value };
        case 'INCREMENT2': 
            return { ...state, secondCounter: state.secondCounter + action.value };
        case 'DECREMENT2':
            return { ...state, secondCounter: state.secondCounter - action.value };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

function UseReducerCounterTwo() {
   const [count, dispatch] = useReducer(reducer , initialState)
  return (
    <div>
         <h1>Count - {count.firstCounter}</h1>
         <h1>2Count - {count.secondCounter}</h1>
    <button onClick={() => {dispatch({type:'INCREMENT',value: 1})}}>INCREMENT</button>
    <button onClick={() => {dispatch({type:'DECREMENT',value: 1})}}>DECREMENT</button>
    <button onClick={() => {dispatch({type:'INCREMENT',value: 5 })}}>INCREMENT 5</button>
    <button onClick={() => {dispatch({type:'DECREMENT',value: 5})}}>DECREMENT 5</button>
    <button onClick={() => {dispatch({type:'INCREMENT2',value: 2 })}}>INCREMENT 2</button>
    <button onClick={() => {dispatch({type:'DECREMENT2',value: 2})}}>DECREMENT 2</button>
    <button onClick={() => {dispatch({type:'RESET'})}}>RESET</button>
    </div>
   
  )
}

export default UseReducerCounterTwo