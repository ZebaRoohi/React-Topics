import React, { useEffect, useState } from 'react'

const ObjectBoolean = () => {
    const[person,setPerson]=useState({name:'John',age:23});
    const[isActive,setIsActive]=useState(false);
    useEffect(()=>{
        setPerson({name:'Sam',age:20});
        setIsActive(true)
    },[])
  return (
    <div>
      <p>Displaying objects</p>
      <p>{person.name} {person.age}</p>
      <p>Displaying boolean values</p>
      <p>{isActive?'Yes':'No'}</p>
    </div>
  )
}

export default ObjectBoolean
