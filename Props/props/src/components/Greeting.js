import React from 'react'

const Greeting = (props) => {
  return (
    <div>
      <h2>Hello,{props.name}Good Morning</h2>
      <h3>Age:{props.age}</h3>
    </div>
  )
}

export default Greeting
