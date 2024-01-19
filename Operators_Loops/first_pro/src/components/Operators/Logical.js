import React from 'react'

const Logical = () => {
    const isTrue=true;
    const isFalse=false;
    const andResult=isTrue && isFalse;
    const orResult=isTrue || isFalse;
    const isNotResult=!isTrue;
  return (
    <div>
      <h3>Example of Logical Operators</h3>
      <p>AND:{andResult.toString()}</p>
      <p>OR:{orResult.toString()}</p>
      <p>NOEqualTo:{isNotResult.toString()}</p>
    </div>
  )
}

export default Logical
