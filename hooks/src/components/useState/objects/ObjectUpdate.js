import React, { useState } from 'react'

const ObjectUpdate = () => {
    const[person,setPerson]=useState({name:'John',age:23});
    const handleClick=()=>{
        setPerson({...person,age:person.age+1})
    }
  return (
    <div>
        <p>{person.name}</p>
        <p>{person.age}</p>
      <button onClick={handleClick}>Increment Age</button>
    </div>
  )
}

export default ObjectUpdate
