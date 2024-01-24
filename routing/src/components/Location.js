import React from 'react'
import { useLocation } from 'react-router-dom'

const Location = () => {
    const location=useLocation()
  return (
    <div>
      <h3>Example of Location Hook</h3>
      <p>Current path:{location.pathname}</p>
      <p>Search:{location.search}</p>
      <p>Hash:{location.hash}</p>
    </div>
  )
}

export default Location
