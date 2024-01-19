import React, { useState } from 'react'

const CharacterCount = () => {
    const[text,setText]=useState('');
    const handleText=(e)=>{
        setText(e.target.value);
    }
  return (
    <div>
      <textarea value={text} onChange={handleText}/>
      <p>Number of characters are...{text.length}</p>
    </div>
  )
}

export default CharacterCount
