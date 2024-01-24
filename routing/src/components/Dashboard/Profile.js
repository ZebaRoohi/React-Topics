import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const{userId}=useParams()
  return (
    <div>
      <h3>Profile page</h3>
      <p>You can access the prife of persone {userId}</p>
    </div>
  )
}

export default Profile
