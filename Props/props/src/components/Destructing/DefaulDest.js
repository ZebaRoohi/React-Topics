//default params.....
/*import React from 'react'
const DefaulDest = ({name='John',age=23}) => {
  return (
    <div>
      <h3>Default Destructure</h3>
      <p>Value of 'Name':{name}</p>
      <p>Value of 'Age':{age}</p>
    </div>
  )
}
export default DefaulDest*/

//Array dest
import React from 'react'

const DefaulDest = ({colors=['red','green','blue']}) => {
    const[color1,color2,color3]=colors
  return (
    <div>
      <p>Color1:{color1}</p>
      <p>Color2:{color2}</p>
      <p>Color3:{color3}</p>
    </div>
  )
}

export default DefaulDest



