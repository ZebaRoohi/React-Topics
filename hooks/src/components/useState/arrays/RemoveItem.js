import React, { useState } from 'react'

const RemoveItem = () => {
    const[items,setItems]=useState(['item1','item2','item3']);
    const removeItems=(index)=>{
        const newItems=[...items];
        newItems.splice(index,1);
        setItems(newItems)
    }
  return (
    <div>
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}
                     <button onClick={removeItems}>Remove Item</button>
                </li>
            ))}
        </ul>
 
    </div>
  )
}

export default RemoveItem
