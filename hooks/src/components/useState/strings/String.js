import React, { useState } from 'react'

const String = () => {
    const[data,setData]=useState('Intial String');
    const updateText=()=>{
        setData('Upadated New String...')
    }
  return (
    <div>
        <p>Text:{data}</p>
      <button onClick={updateText}>Updated Text</button>
    </div>
  )
}
export default String
