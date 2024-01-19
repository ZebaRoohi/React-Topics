import React from 'react'

const Filter = () => {
    const numbers=[1,3,5,2,5,6,10,12,34,100,121,160];
    const filter_numbers=numbers.filter((number)=>number%2===0)
  return (
    <div>
      <h3>Example of Filter</h3>
      <p>Numbers without filter:{numbers.join(',')}</p>
      <p>Numbers with filter:{filter_numbers.join(',')}</p>
    </div>
  )
}

export default Filter
