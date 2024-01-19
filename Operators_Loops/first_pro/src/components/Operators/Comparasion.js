import React from 'react'

const ComparasionOperator = () => {
    const x=10;
    const y=20;
    const equal=x===y;
    const notEqual=x!==y;
    const greater=x>y;
    const lessthan=x<y;
  return (
    <div>
      <h3>ComparasionOperators</h3>
      {/* to convert boolean we use toString() */}
      <p>Equal:{equal.toString()}</p>
      <p>IsNotEqual:{notEqual.toString()}</p>
      <p>Greater:{greater.toString()}</p>
      <p>Lessthan:{lessthan.toString()}</p>
    </div>
  )
}

export default ComparasionOperator
