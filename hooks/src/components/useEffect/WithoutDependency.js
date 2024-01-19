import React, { useEffect } from 'react'
import { useState } from 'react'

const WithoutDependency = () => {
    const[state,setState]=useState(0)
    const Increment=()=>{
        setState(state+1)
    }
    useEffect(()=>{
        alert(`You clicked ${state} times`)
    })
  return (
    <div>
        <p>Count:{state}</p>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default WithoutDependency
