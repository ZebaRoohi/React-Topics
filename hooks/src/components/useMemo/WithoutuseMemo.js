import React, { useState } from 'react'

const WithoutuseMemo = () => {
    const[a,setA]=useState();
    const[b,setB]=useState();
    const add=(x,y)=>{
        console.log('Addition ')
        return x+y;
    }
    const sub=(x,y)=>{
        console.log('Substraction');
        return x-y;
    }
    const mul=(x,y)=>{
        console.log('Multiplication');
        return x*y;
    }
  return (
    <div>
      <input type='text' value={a} onChange={(e)=>setA(parseInt(e.target.value))} />
      <input type='text' value={b} onChange={(e)=>setB(parseInt(e.target.value))} />
      <p>Additin:{add(a,b)}</p>
      <p>Substraction:{sub(a,b)}</p>
      <p>Multiplication:{mul(a,b)}</p>
    </div>
  )
}

export default WithoutuseMemo
