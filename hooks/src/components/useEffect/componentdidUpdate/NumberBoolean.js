import React, { useEffect, useState } from 'react'

const NumberBoolean = () => {
    const[numbers,setNumbers]=useState(0);
    const[status,setStatus]=useState('Active');
    useEffect(()=>{
        document.title=`Count ${numbers} Status-${status}`
    },[numbers,status])
    const Counting=()=>{
        setNumbers(numbers+1);
    } 
    const ToggleStatus=()=>{
        setStatus(status==='Active'?'Inactive':'Active');
    }
  return (
    <div>
        <p>{numbers}</p>
        <p>{status}</p>
      <button onClick={Counting}>Increment</button>
      <button onClick={ToggleStatus}>Toggle button</button> 
    </div>
  )
}

export default NumberBoolean
