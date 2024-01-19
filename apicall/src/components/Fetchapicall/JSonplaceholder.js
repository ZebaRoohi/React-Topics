import React, { useEffect, useState } from 'react'

const JSONfetch = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
    const fetchApi=async()=>{
        try{
        const response=await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const jsonData=await response.json();
        setData(jsonData)

        }catch(err){
            console.log('Error in fetching api',err)
        }
    }
    fetchApi()
    },[])
  return (
    <div>
        {data?(
        <div>
        <h2>Example of Json place holder</h2>
        {data.map((todo)=>(
            <li key={todo.id}>
                <strong>
                {todo.title}</strong>
                -
                {todo.completed?'Completed':'Incomplete'}
                </li>
        ))}
        </div>
        ):(
            <div>
                <p>Loading....</p>
                </div>
        )
        }
    </div>
  )
}

export default JSONfetch
