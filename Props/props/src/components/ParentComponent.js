/*import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const handleClick=()=>{
        alert('Button clicked from parent component');
    }
  return (
    <div>
      <ChildComponent clickHandler={handleClick} />
    </div>
  )
}

export default ParentComponent;*/
//Array of colors
/*import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const colors=['red','green','orange'];
  return (
    <div>
      <ChildComponent colorList={colors} />
    </div>
  )
}

export default ParentComponent*/

//Objects
import React from 'react'
import ChildComponent from './ChildComponent'
const ParentComponent = () => {
    const users=[{
        name:'John',
        age:23,
        admin:true
    }]
  return (
    <div>
      <ChildComponent userInfo={users} />
    </div>
  )
}
export default ParentComponent


