//Logical &&

/*import React, { useState } from 'react'

const LogicalAnd = () => {
    const[isLogin,setIsLogin]=useState(false)
  return (
    <div>
      <h3>Example of Logical && operator for condition rendering...</h3>
      {isLogin &&<p>Welcome ,User</p>}
      {!isLogin && <p>Please log in</p>}
    </div>
  )
}

export default LogicalAnd */

//condition rendering from component..
/*import React, { useState } from 'react'
const LogicalAnd = () => {
    const[showComponent,setShowComponent]=useState(true);
    const MyComponent=()=>{
        return <h4>The condition is rendering from component....</h4>
    }
  return (
    <div>
      {showComponent && <MyComponent />}
      {!showComponent && <p>No Found</p>}
    </div>
  )
}
export default LogicalAnd */

//Rendring the list..
import React, { useState } from 'react'

const LogicalAnd = () => {
    const[items,setItems]=useState(['item1','item2','item3']);
    const dataSize=items.length>0;
  return (
    <div>
      {dataSize&&
      <ul>
        {items.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
      </ul>
      }
      {!dataSize && <p>Not found items</p>}
    </div>
  )
}

export default LogicalAnd




