import React from 'react'

const ConditionRender = (props) => {
    const isLoggedIn=props.isLoggedIn;
  return (
    <div>
      {isLoggedIn?(
        <h1>Welcome Back!</h1>
      ):
      (
        <h2>Please Login </h2>
      )}
    </div>
  )
}
export default ConditionRender
