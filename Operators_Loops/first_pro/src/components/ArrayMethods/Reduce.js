/*import React from 'react'

const Reduce = () => {
    const numbers=[1,2,3,4,5];
    const reduce_numbers=numbers.reduce((acc,cur)=>acc+cur);
  return (
    <div>
      <h3>Example of reduce</h3>
      <p>Numbers:{numbers.join(',')}</p>
      <p>Reduce numbers:{reduce_numbers}</p>
    </div>
  )
}

export default Reduce*/

import React from 'react'

const Reduce = () => {
    const max_numbers=[32,45,100,120,8];
    const reduce_max=max_numbers.reduce((max,curr)=>max>curr?max:curr)
  return (
    <div>
      <p>{reduce_max}</p>
    </div>
  )
}

export default Reduce

