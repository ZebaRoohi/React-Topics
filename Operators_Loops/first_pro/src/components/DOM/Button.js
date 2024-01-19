import React from 'react'

const Button = () => {
const handleClick=()=>{
    alert('You clicked the button')
}
const handleInputChange=(e)=>{
    alert(`You clicked ${e.target.value}`)
}
  return (
    <div>
      <button onClick={handleClick}>Clik Me</button>
      <input type='text' onChange={handleInputChange} />
    </div>
  )
}

export default Button
