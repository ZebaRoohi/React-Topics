import React from 'react'

const NestedList = () => {
    const categories=[
        {
            id:1,
            name:'fruits',
            items:['Apple','Banana','Orange'],
        },
        {
            id:2,
            name:'Vegetables',
            items:['Carrot','Tomato','Potato'],   
        },
    ]
  return (
    <div>
     <h3>Example of Nested List</h3> 
     <ul>
     {categories.map((category)=>
        <li key={category.id}>{category.name}
        <ul>
            {category.items.map((item,index)=>
            <li key={index}>{item}
            <ul></ul>
            </li>
            )}
        </ul>
        </li>
     )}
     </ul>
    </div>
  )
}
export default NestedList
