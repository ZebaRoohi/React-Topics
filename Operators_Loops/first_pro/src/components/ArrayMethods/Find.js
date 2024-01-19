/*import React from 'react'
const Find = () => {
    const numbers=[1,3,5,7,8,10];
    const find_numbers=numbers.find(number=>number%2===0)
  return (
    <div>
      <h3>Example of find method</h3>
      {find_numbers?(
      <p>Even number is:{find_numbers}</p>
      ):(
        <p>No Even numbers found</p>
      )
}
    </div>
  )
}
export default Find*/

import React from 'react'
const Find = () => {
    const person=[
        {name:'John',age:23,isStudent:false},
        {name:'Sam',age:21,isStudent:true},
        {name:'Harry',age:20,isStudent:false}
    ];
    const find_person=person.find(user=>user.isStudent);
  return (
    <div>
        <h3>Example of find</h3>
      {find_person?
        (
            <p>{`Student is :${find_person.name}`}</p>
        )  :(
            <p>No student found</p>
        )
    }
    </div>
  )
}

export default Find
