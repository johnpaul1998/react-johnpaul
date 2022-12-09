import React, { useEffect, useState } from 'react'

function UseEffectMouse() {
    const [x,setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=> {
        console.log("useEffect Call")
        window.addEventListener('mousemove',logMousePosition)

        return () => {
            console.log("unmounted")
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
  return (
    <div>
        <h2>Hook X - {x} Y - {y}</h2>
    </div>
  )
}

export default UseEffectMouse