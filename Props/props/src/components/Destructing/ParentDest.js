/*import React from 'react'
import ChildDest from './ChildDest'

const ParentDest = () => {
    const str='Hello Good Afternoon';
  return (
    <div>
      <ChildDest message={str} />
    </div>
  )
}

export default ParentDest*/

//Object passing
/*import React from 'react'
import ChildDest from './ChildDest'
const ParentDest = () => {
    const data={
        name:'John',
        age:23
    }
  return (
    <div>
      <ChildDest person={data} />
    </div>
  )
}

export default ParentDest*/

//Array Dest
import React from 'react'
import ChildDest from './ChildDest'

const ParentDest = () => {
  const num=[1,2,3,4,5]
  return (
    <div>
      <ChildDest numbers={num} />
    </div>
  )
}
export default ParentDest


