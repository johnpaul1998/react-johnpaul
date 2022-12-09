import React,{useContext} from 'react'
import { CountState } from './Main'

function ComponentA() {
  const count = useContext(CountState)
  return (
    <div>ComponentA
      <button onClick={()=>{count.countDispatch('INCREMENT')}}>INCREMENT</button>
      <button onClick={()=>{count.countDispatch('DECREMENT')}}>DECREMENT</button>
      <button onClick={()=>{count.countDispatch('RESET')}}>RESET</button>
    </div>
  )
}

export default ComponentA