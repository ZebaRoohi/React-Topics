import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    const{topic}=useParams();
  return (
 
    <div>
      <h3>About us </h3>
      <p>Welcome to About us Page.. You can find many topics like :{topic}</p>
    </div>
  )
}

export default About
