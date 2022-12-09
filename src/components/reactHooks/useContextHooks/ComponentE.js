import React,{ useContext } from 'react'
import ComponentF from './ComponentF'
import { FirstNameContext, LastNameContext } from '../App'


function ComponentE() {
   const firstname = useContext(FirstNameContext)
   const lastName = useContext(LastNameContext)
  return (
    <div>ComponentE <br/>
        {firstname} - {lastName}
        <ComponentF/>
    </div>
  )
}

export default ComponentE