/*import React, { useState } from 'react'

const Undefined = () => {
    const[value,setValue]=useState(undefined);
    const handleValue=()=>{
        setValue('New value set here...')
    }
  return (
    <div>
      <p>UpdatedValue:{value===undefined?'Undefined':value}</p>
      <button onClick={handleValue}>Updated Value</button>
    </div>
  )
}

export default Undefined*/
//With Asynch operations..
import React, { useState } from 'react'

const Undefined = () => {
    const[value,setValue]=useState(undefined);
    const fetchData=()=>{
        setTimeout(()=>{
            setValue('New data....')
        },2000)
       
    }
  return (
    <div>
      <p>UpdatedValue:{value===undefined?'Loading....':value}</p>
      <button onClick={fetchData}>Updated Value</button>
    </div>
  )
}

export default Undefined
