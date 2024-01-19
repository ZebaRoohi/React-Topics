import React, { useState } from 'react'

const FilterNumbers = () => {
    const[numbers,setNumbers]=useState([1,2,3,4,5,6]);
    const filterEvenNumbers=()=>{
        setNumbers(numbers.filter((number)=>number%2===0))
    }
  return (
    <div>
      <ul>
        {numbers.map((number,index)=>(
            <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={filterEvenNumbers}>Filter Numbers</button>
    </div>
  )
}

export default FilterNumbers
