import React from 'react'
const Arthimatic = () => {
    const a=10;
    const b=5;
    const addition=a+b;
    const substraction=a-b;
    const multiplication=a*b;
    const division=a/b;
  return (
    <div>
      <h2>Example of Arthimatic Operations</h2>
      <p>Addition:{addition}</p>
      <p>Substraction:{substraction}</p>
      <p>Multiplication:{multiplication}</p>
      <p>Division:{division}</p>
    </div>
  )
}

export default Arthimatic
