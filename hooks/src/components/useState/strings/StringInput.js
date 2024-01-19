import React, { useState } from 'react'

const StringInput = () => {
    const[input,setInput]=useState('');
    const handleInput=(e)=>{
        setInput(e.target.value)
    }
  return (
    <div>
      <input type='text' value={input} onChange={handleInput} />
      <p>Enter text is..{input}</p>
    </div>
  )
}

export default StringInput
