import React from 'react'

const NestedNestedList = () => {
    const store=[
        {
            id:1,
            name:'Bakery',
            items:[
                {
                    category:'Cake',
                    subItems:['PineApple','Choclate','Vanilla']
                },
                {
                    category:'Juice',
                    subItems:['Mango','Pineapple','Sugarcane']
                }
            ]
        }
    ]
  return (
    <div>
      <h3>Example of nested nested list</h3>
      <ul>
        {store.map((item)=>
        <li key={item.id}>{item.name}
        <ul>
            {item.items.map((categories)=>
                <li key={categories}>{categories.category}
                <ul>
                    {categories.subItems.map((subitem)=>
                    <li key={subitem}>{subitem}</li>
                    )}
                </ul>
                </li>
            )}
        </ul>
        </li>
      
        )}
      </ul>
    </div>
  )
}

export default NestedNestedList
