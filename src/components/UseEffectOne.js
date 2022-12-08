import React,{ useEffect, useState } from 'react'

function UseEffectOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('')
  useEffect(() =>{
    document.title = `You click ${count} times`;
    console.log("useEffect - updated")
  },[count])
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>Click {count} increment </button>
    </div>
  )
}

export default UseEffectOne