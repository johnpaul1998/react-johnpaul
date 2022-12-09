import React, { useContext } from 'react'
import ComponentE from './ComponentE'
import { FirstNameContext, LastNameContext } from '../App'
import { Counter } from './Counter'

function ComponentC() {
    const firstname = useContext(FirstNameContext)
    const lastName = useContext(LastNameContext)
  return (
    <div>ComponentC
        <br/>
        {firstname} - {lastName}
        <ComponentE />
    </div>
  )
}

export default ComponentC