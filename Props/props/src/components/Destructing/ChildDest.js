//String Passing
/*import React from 'react'

const ChildDest = (props) => {
    const{message}=props
  return (
    <div>
      <h3>{message}</h3>
    </div>
  )
}

export default ChildDest*/

//Object Passing
/*import React from 'react'
const ChildDest = ({person}) => {
  return (
    <div>
      <h3>Object passing</h3>
      <p>Name:{person.name}</p>
      <p>Age:{person.age}</p>
    </div>
  )
}

export default ChildDest*/

//Array Passing
import React from 'react'

const ChildDest = ({numbers}) => {
  return (
    <div>
      <h3>Array destructing</h3>
      <ul>
        {numbers.map(number=>
          <li key={number}>{number}</li>
          )}
      </ul>
    </div>
  )
}

export default ChildDest

