import React, { useEffect, useState } from 'react'

const UpdatePage = () => {
    const[pageTitle,setPageTitle]=useState('Default page title')
    useEffect(()=>{
        document.title=pageTitle
    },[pageTitle])
    const changeTitle=()=>{
        const newtitle=prompt('Enter new page title');
        if(newtitle){
            setPageTitle(newtitle)
        }
    }
  return (
    <div>
      <h3>Updating page title</h3>
      <p>New Page:{pageTitle}</p>
      <button onClick={changeTitle}>Change Title</button>
    </div>
  )
}

export default UpdatePage
