import { useEffect, useState } from 'react'

const useDarkMode = () => {
    const[darkMode,setDarkMode]=useState(false);

    const toggleMode=()=>{
        setDarkMode(!darkMode)
    }
    useEffect(()=>{
        document.body.classList.toggle('dark-mode',darkMode)
    },[darkMode])
    return[darkMode,toggleMode];
}

export default useDarkMode
