import React, { useState,useRef, useEffect } from 'react'

const StoringValues = () => {
    const[currentValue,setCurrentValue]=useState(0);
    const prevValue=useRef();

    useEffect(()=>{
        prevValue.current=currentValue;
    },[currentValue])

    const Increment=()=>{
        setCurrentValue(currentValue+1);
    }
  return (
    <div>
      <p>Current Value:{currentValue}</p>
      <p>Previous Value:{prevValue.current}</p>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default StoringValues
