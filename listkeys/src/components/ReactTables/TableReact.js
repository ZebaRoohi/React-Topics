import React from 'react'

const TableReact = () => {
    const users=[
        {
            id:1,
            name:'John',
            email:'john@test.com'
        },
        {
            id:2,
            name:'Sam',
            email:'sam@test.com'
        },
        {
            id:3,
            name:'Harry',
            email:'harry@test.com'
        }
    ]
  return (
    <div>
      <h3>Example of React Table</h3>
      <table style={{'border':'1px solid red'}}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user,index)=>
            <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default TableReact
