import React, { useState } from 'react'

const Authentication = () => {
    const[signIn,setSignIn]=useState(false);
    const SingnIn=()=>{
        setSignIn(true);
    }
    const SingnOut=()=>{
        setSignIn(false);
    }
  return (
    <div>
        {signIn?
        (<div>
      <button onClick={SingnIn}>SingnIN</button>Welcome Back!you singn in
      </div>):(
        <div>
      <button onClick={SingnOut}>SingnOUT</button> Please Singn In back..
      </div>
        )}
    </div>
  )
}

export default Authentication
