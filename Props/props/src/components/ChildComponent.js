/*import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={props.clickHandler} >Click Me</button>
    </div>
  )
}

export default ChildComponent*/

/*import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      <ul>
        {props.colorList.map((color,index)=>(
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  )
}

export default ChildComponent*/

//object
import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      <p>Name:{props.userInfo.name}</p>
      <p>Age:{props.userInfo.age}</p>
      <p>Admin:{props.userInfo.admin?'Yes':'No'}</p>
    </div>
  )
}

export default ChildComponent




