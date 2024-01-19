import React, { useEffect, useState } from 'react'

const Numbers = () => {
    const[numbers,setNumbers]=useState(0);
    const[text,setText]=useState('Intial string')
    useEffect(()=>{
        setNumbers(45);
        setText('With useEffect string')
    },[])
  return (
    <div>
      <p>Number with useEffect</p>
      <p>{numbers}</p>
      <p>{text}</p>
    </div>
  )
}

export default Numbers
