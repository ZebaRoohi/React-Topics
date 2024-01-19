import React, { useState } from 'react'

const Toggle = () => {
    const[isActive,setIsActive]=useState(false);
    const handleToggle=()=>{
        setIsActive(!isActive)
    }
  return (
    <div>
      <button onClick={handleToggle}>{isActive?'Deactive':'Active'}</button>
      <p>Status:{isActive?'Active':'Inactive'}</p>
    </div>
  )
}

export default Toggle
