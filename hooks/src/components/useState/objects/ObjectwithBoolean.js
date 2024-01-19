import React, { useState } from 'react'
const ObjectwithBoolean = () => {
    const[items,setItem]=useState({task:'Do Something',complete:false})
    const toggleTask=()=>{
        setItem({...items,complete:!items.complete});
    }
  return (
    <div>
      <p>Task:{items.task}</p>
      <p>Status:{items.complete?'Completed':'Incomplete'}</p>
      <button onClick={toggleTask}>Toggle Task</button>
    </div>
  )
}

export default ObjectwithBoolean
