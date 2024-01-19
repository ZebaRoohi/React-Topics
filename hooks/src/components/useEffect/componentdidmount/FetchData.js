import React, { useEffect, useState } from 'react'
const FetchData = () => {
    const[data,setData]=useState(null);
    const[isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        const fectchDetails=async()=>{
            try{
                const response=await fetch('https://jsonplaceholder.typicode.com/todos/2');
                const result=await response.json();
                setData(result)
            }catch(e){
                console.log('Error',e);
            };
            setIsLoading(false);
        }
        fectchDetails()
    },[])
  return (
    <div>
      {isLoading?(
        <p>Page is Loading</p>
      ):(
        <p>Title:{data?.title}</p>
      )}
    </div>
  )
}

export default FetchData
