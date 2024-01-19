import React, { useState } from 'react'

const ArrayWithInput = () => {
    const[items,setItems]=useState([]);
    const[newItems,setNewItems]=useState('')
    const handleSubmit=()=>{
        setItems([...items,newItems]);
        setNewItems('')
    }
  return (
    <div>
      <ul>
        {items.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
      </ul>
      <input type='text' value={newItems} onChange={(e)=>setNewItems(e.target.value)} />
      <button onClick={handleSubmit}>Click me</button>
    </div>
  )
}

export default ArrayWithInput
