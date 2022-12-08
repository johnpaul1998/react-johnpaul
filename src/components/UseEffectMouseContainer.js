import React, { useState } from 'react'
import UseEffectMouse from './UseEffectMouse'

function UseEffectMouseContainer() {
    const [toggle, setToggle] = useState(true)
  return (
    <div>
        <button onClick={() => setToggle(!toggle)}>Toggle display</button>
        {toggle && <UseEffectMouse/>}
    </div>
  )
}

export default UseEffectMouseContainer