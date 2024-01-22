import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
    const axiosFetch=async()=>{
        try{
            const response= await axios.get('https://rickandmortyapi.com/api/character');
            setData(response.data.results);
        }
        catch(err){
            console.log('Error',err)
        }
    }
    axiosFetch()
},[])
return (
    <div>
        <div>(
            <h1>Example of Axios Method</h1>
            <ul>
            {data?.map((character)=>(
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
    
    </div>

  )}

export default Axios
