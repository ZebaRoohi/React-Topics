import React, { useEffect, useState } from 'react'
import axios from 'axios'

const JsonPlaceAxios = () => {
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        const fetchUsers=async()=>{
            const response=await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        }
        fetchUsers()
    },[])
 
  return (
    <div>
        {users?
            <div>(
                  <h3>Example of Json place holder users</h3>
                <ul>
                    {users.map((user)=>(
                        <li key={user.id}>Name:{user.name}
                        -Username:{user.username} -Email:{user.email}-Address:{user.address.city}-Location:{user.address.geo.lat} -PhoneNumber:{user.phone}
                        </li>
                    ))}
                </ul>
            )
                </div>:(
                    <div>
                        Loading.......
                        </div>
                )
        }

     
    </div>
  )
                }

export default JsonPlaceAxios
