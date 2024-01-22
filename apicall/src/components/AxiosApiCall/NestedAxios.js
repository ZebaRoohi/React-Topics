import React, { useEffect, useState } from 'react'
import data from './data.json';

const NestedAxios = () => {
    const[nesteadData,setNestedData]=useState(null);
    useEffect(()=>{
        setNestedData(data)
    },[])
  return (
    <div>
      {nesteadData?(
        <div>
            <ul>
            {nesteadData.categories.map((category)=>(
              <li key={category.id}>Category name: {category.name}
              
              <ul>
                {category.items.map((item)=>(
                  <li key={item.id}>{item.name}-Price :{item.price}</li>
                ))}
              </ul>
              </li>
            ))   
            }
            </ul>
            </div>

      ):(
        <div>
          Loading.....
          </div>
      )}
    </div>
  )
}

export default NestedAxios
