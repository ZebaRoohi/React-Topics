import React, { useEffect } from 'react'

const ComponontMount = () => {
    useEffect(()=>{
        console.log('Component is Mounting');
        return()=>{
            console.log('Component will Mount')
        }
    },[])
  return (
    <div>
      
    </div>
  )
}

export default ComponontMount
