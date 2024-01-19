import React, { useContext } from 'react'
import {data,data1} from '../../App.js';
const ChildC = () => {
  const firstName=useContext(data);
  const age=useContext(data1)
  return (
    <div>
      <p>My name is {firstName} my age is {age}</p>
    </div>
  )
}

export default ChildC
