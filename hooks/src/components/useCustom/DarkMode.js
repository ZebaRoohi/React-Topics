import React from 'react'
import useDarkMode from './useDarkMode'

const DarkMode = () => {
    const[darkMode,toggleMode]=useDarkMode();
  return (
    <div>
      <input type='checkbox' checked={darkMode} onChange={toggleMode}/>
    </div>
  )
}

export default DarkMode
