import React, { useEffect, useState } from 'react'

const FetchMethod = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
    const fetchApi=async()=>{
        try{
        const response=await fetch('https://rickandmortyapi.com/api/character');
        const jsonData=await response.json();
        setData(jsonData.results)

        }catch(err){
            console.log('Error in fetching api',err)
        }
    }
    fetchApi()
    },[])
  return (
    <div>
        {data?
        <div>(
            <h1>Example of Fetch Method</h1>
            <ul>
            {data.map((character)=>(
                <li key={character.id}>
                <strong>{character.name}</strong>-{character.status}
                <br />
                <img src={character.image}  style={{maxWidth:'100px', height:'100px'}}/>
                </li>
            ))}
           </ul> 
           {/* to display data in stringify
                <pre>{JSON.stringify(data,null,2)}</pre> */}
           )</div>:(
            <div>
                <p>Loading.....</p>
                </div>
           )    
    }
    </div>

  )}

export default FetchMethod
