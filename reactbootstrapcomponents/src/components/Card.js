import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap';
import { FaMoon } from "react-icons/fa";

const Cards = () => {
    const[characters,setCharacters]=useState([]);
    const[background,setBackground]=useState('#000');
   
    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/character')
        .then(response=>{
            setCharacters(response.data.results)
        })
    },[])

    const toggleBackground=()=>{
        setBackground((prev)=>(prev==='#000'?'#fff':'#000'))
    }

  return (
    <div style={{background}} className='card-container'>  
        <FaMoon  onClick={toggleBackground} style={{font:'2rem', cursor:'pointer' ,color:background==='#fff'?'#000':'#fff'}}/>
              {characters.map((character)=>(
        <Card key={character.id}  className='card'>
            <Card.Img variant='top' src={character.image}></Card.Img>
            <Card.Title>Title:{character.name}</Card.Title>
            <Card.Body>
                <Card.Text>
                {`Status: ${character.status}`}
               <br />
               {`Species: ${character.species}`}
               <br />
               {`Gender: ${character.gender}`}
               <br />
               {`Location :${character.location.name}`}
             </Card.Text>
            </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default Cards
