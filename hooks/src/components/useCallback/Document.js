import React, { useState } from 'react'
import useDocument from './useDocument';

const Document = () => {
    const[data,setData]=useState(false);
    useDocument(data);
const toggle=()=>{
    setData(true)
}
const handleToggle=()=>{
    setData(false);
}
  return (
    <div>
     <p>Status:{data?'online':'offline'}</p>
     <button onClick={toggle}>Online</button>
     <button onClick={handleToggle}>Offline</button>
    </div>
  )
}

export default Document
