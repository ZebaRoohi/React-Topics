import React, { useState,useCallback } from 'react'

const String = () => {
    const[text,setText]=useState('Inital value');
    const handleClick=useCallback(()=>{
        setText('Updated Value')
        console.log(text)
    },[text]);
  return (
    <div>
        <p>Text:{text}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default String
