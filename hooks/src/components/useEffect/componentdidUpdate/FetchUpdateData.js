// import React, { useEffect, useState } from 'react'

// const FetchUpdateData = ({somevalue}) => {
//     const[data,setData]=useState(null);
//     const[isLoading,setIsLoading]=useState(true);
//     useEffect(()=>{
//         const fectDetails=async()=>{
//             try{
//                 const response=await fetch('https://jsonplaceholder.typicode.com/todos/2');
//                 const result=await response.json();
//                 setData(result);
//             }
//             catch(error){
//                 console.log('Error',error);
//             }
//             setIsLoading(false);       
//         }
     
//      useEffect(()=>{
//         fectDetails()
//     },[somevalue])
//   return (
//     <div>
//           {isLoading?(
//         <p>Page is Loading</p>
//       ):(
//         <p>Title:{data?.title}</p>
//       )}
//     </div>
//   )
// }

// export default FetchUpdateData
