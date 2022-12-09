import React, { useContext } from 'react'
import { CountState } from './Main'

function ComponentF() {
    const count = useContext(CountState)
  return (
    <div>ComponentF
        <button onClick={() => {count.countDispatch('INCREMENT')}}>INCREMENT</button>
        <button onClick={() => {count.countDispatch('DECREMENT')}}>DECREMENT</button>
        <button onClick={() => {count.countDispatch('RESET')}}>RESET</button>
    </div>
  )
}

export default ComponentF