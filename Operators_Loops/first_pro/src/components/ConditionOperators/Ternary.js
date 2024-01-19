//Ternary Operator for login
/*import React from 'react'

const LoginStatus = () => {
    const isLogin=true;
    const loginMessage=(isLogin)?'Logged In':'Logged Out'
  return (
    <div>
      <h3>Login Status of User</h3>
      <p>User is:{loginMessage}</p>
    </div>
  )
}

export default LoginStatus*/

//Checking age
/*import React from 'react'
const AgeCheck = () => {
    const age=16;
    const personStatus=age>=18?'Adult':'Minor'
  return (
    <div>
      <h3>Person age display</h3>
      <p>Person Status:{personStatus}</p>
    </div>
  )
}
export default AgeCheck*/

//if -else
import React from 'react'

const AgeCheck = () => {
    const age=17;
    let personStatus;
    if(age>=18){
        personStatus='Adult'
    }
    else{
        personStatus='Minor'
    }
  return (
    <div>
      <p>{personStatus}</p>
    </div>
  )
}

export default AgeCheck

