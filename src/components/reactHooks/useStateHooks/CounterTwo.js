import React, { useState } from 'react'

function CounterTwo() {
    const initialValue = 0;
    const [count,setCount] = useState(initialValue);

    const increment5 = () =>{
        for(let i = 0; i<5; i++){
            setCount((prvCount) => prvCount + 1);
        }
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>incremennt</button>
        <button onClick={() => setCount(count-1)}>decrement</button>
        <button onClick={increment5}>increment 5</button>
        <button onClick={() => setCount(initialValue)}>reset</button>
    </div>
  )
}

export default CounterTwo