import React from 'react'

const ObjectList = () => {
    const person=[{id:1,name:'John'},{id:2,name:'Sam'},{id:3,name:'Harry'}];
  return (
    <div>
      <h3>Example of Object list</h3>
        <ul>
            {person.map((user)=>
            <li key={user.id}>{user.name}</li>
            )}
        </ul>
    </div>
  )
}

export default ObjectList
