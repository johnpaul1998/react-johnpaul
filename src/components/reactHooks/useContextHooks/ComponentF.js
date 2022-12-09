import React from 'react'
import { FirstNameContext, LastNameContext } from '../App'

function ComponentF() {
  return (
    <div>ComponentF
        <FirstNameContext.Consumer>
            {
                firstname => {
                    return (
                        <LastNameContext.Consumer>
                            {
                                lastname => {
                                    return (
                                        <div>my firstname is {firstname} and last is {lastname}</div>
                                    )
                                }
                            }
                        </LastNameContext.Consumer>
                )
            }}
        </FirstNameContext.Consumer>
    </div>
  )
}

export default ComponentF