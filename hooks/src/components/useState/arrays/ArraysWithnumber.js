import React, { useState } from 'react'

const ArraysWithnumber = () => {
    const[numbers,setNumbers]=useState([1,2,3]);
    const addNumbers=()=>{
       setNumbers([...numbers,Math.floor(Math.random()*10)]); 
    }

  return (
    <div>
        <ul>
            {numbers.map((number,index)=>(
                <li key={index}>{number}</li>
            ))}
        </ul>
      <button onClick={addNumbers}>Random Numbers</button>
    </div>
  )
}

export default ArraysWithnumber
