import React, { useState } from 'react'

const RandomNumber = () => {
    const[randomNumber,setRandomNumber]=useState(0);
    const handleRandom=()=>{
        setRandomNumber(Math.floor(Math.random()*100)+1);
    }
  return (
    <div>
      <p>Random Number:{randomNumber}</p>
      <button onClick={handleRandom}>Generate Random Number</button>
    </div>
  )
}

export default RandomNumber
