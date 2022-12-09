import React, { useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export const CountState = React.createContext();
const initialState = 0;
const reducer = (state, action) =>{
    switch(action){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT': 
            return state - 1;
        case 'RESET': 
            return initialState;
        default:
            return state;
    }
}

function Main() {
   const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountState.Provider value={{countState: count, countDispatch: dispatch}}>
        <div>
            count - {count}
            <ComponentA/>
            <ComponentB/>
            <ComponentC/>
        </div>
    </CountState.Provider>
  )
}

export default Main