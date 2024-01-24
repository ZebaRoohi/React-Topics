import React from 'react'
import { Link,Routes,Route } from 'react-router-dom'
import Profile from './Profile'
import Settings from './Settings'

const Dashboard = () => {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to='profile/123'>Profile</Link></li>
            <li><Link to='settings'>Serttings</Link></li>
        </ul>
      </nav>
      <Routes>
    <Route path='profile/:useId' element={<Profile />} />
    <Route path='settings' element={<Settings />} />
</Routes>
    </div>

  )
}

export default Dashboard
