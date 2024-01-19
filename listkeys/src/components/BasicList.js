import React from 'react'

const BasicList = () => {
    const fruits=['apple','banana','orange','kiwi'];
  return (
    <div>
      <ol>
        {fruits.map((fruit,index)=>
        <li key={index}>{fruit}</li>)}
      </ol>
    </div>
  )
}

export default BasicList
