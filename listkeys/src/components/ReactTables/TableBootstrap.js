import React from 'react';
import {Table} from 'react-bootstrap';

const TableBootstrap = () => {
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
      <Table striped variant='dark'>
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
      </Table>
    </div>
  )
}

export default TableBootstrap
