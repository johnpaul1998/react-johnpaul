import React, { useContext } from 'react'
import { CountState } from './Main'

function ComponentD() {
    const count = useContext(CountState)
  return (
    <div>ComponentD
        <button onClick={() => {count.countDispatch('INCREMENT')}}>INCREMENT</button>
        <button onClick={() => {count.countDispatch('DECREMENT')}}>DECREMENT</button>
        <button onClick={() => {count.countDispatch('RESET')}}>RESET</button>
    </div>
  )
}

export default ComponentD