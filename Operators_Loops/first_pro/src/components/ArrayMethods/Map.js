import React from 'react'

const Map = () => {
    const numbers=[1,2,3,4,5];
    const dblnumber=numbers.map((nummber)=>nummber*2);
  return (
    <div>
      <h3>Map Example of Array</h3>
      <p>Original numbers:{numbers.join(',')}</p>
      <p>Double Numbers:{dblnumber.join(',')}</p>
    </div>
  )
}

export default Map
