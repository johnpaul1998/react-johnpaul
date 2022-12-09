import React, { useContext, useState } from 'react'
import { FirstNameContext, LastNameContext } from '../App'

export const Counter = () => {
    const [count, setCount] = useState(0);
    const firstname = useContext(FirstNameContext)
    const lastName = useContext(LastNameContext)
  
  return (
    <div>
        <h1>{count}</h1>
        <h2>{firstname} - {lastName}</h2>
        <button onClick={()=>setCount(count + 1)}>increment</button>
        <button onClick={()=>setCount(count - 1)}>decrement</button>
    </div>
  )
}
