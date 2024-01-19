import React, { useMemo, useState } from 'react'

const WithMemo = () => {
    const[a,setA]=useState();
    const[b,setB]=useState();
    const add=useMemo(()=>{
        console.log('Addition ')
        return a+b;   
    },[a,b])
    const sub=useMemo(()=>{
        console.log('Sunbsrtaction ')
        return a-b;   
    },[a,b])
    const mul=useMemo(()=>{
        console.log('Multiplication ')
        return a*b;   
    },[a,b])
  return (
    <div>
      <input type='text' value={a} onChange={(e)=>setA(parseInt(e.target.value))} />
      <input type='text' value={b} onChange={(e)=>setB(parseInt(e.target.value))} />
      <p>Additin:{add}</p>
      <p>Substraction:{sub}</p>
      <p>Multiplication:{mul}</p>
    </div>
  )
}

export default WithMemo
