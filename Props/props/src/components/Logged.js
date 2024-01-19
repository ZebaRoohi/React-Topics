import React from 'react'

const Logged = (props) => {
    const person=true;
    const logged=person?props.isLoggedin:props.isLoggedout
  return (
    <div>
      <h2>{logged}</h2>
    </div>
  )
}

export default Logged
