import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'INCREMENT': 
            return state + 1;
        case 'DECREMENT':
            return state -1;
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

function UseReducerCounterThree() {
   const [count, dispatch] = useReducer(reducer , initialState)
   const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
  return (
    <div>
         <h1>Count - {count}</h1>
         <h1>Count 2 - {countTwo}</h1>
    <button onClick={() => {dispatch('INCREMENT')}}>INCREMENT</button>
    <button onClick={() => {dispatch('DECREMENT')}}>DECREMENT</button>
    <button onClick={() => {dispatch('RESET')}}>RESET</button>
    <div>
    <button onClick={() => {dispatchTwo('INCREMENT')}}>INCREMENT 2</button>
    <button onClick={() => {dispatchTwo('DECREMENT')}}>DECREMENT 2</button>
    <button onClick={() => {dispatchTwo('RESET')}}>RESET</button>
    </div>
    </div>
   
  )
}

export default UseReducerCounterThree