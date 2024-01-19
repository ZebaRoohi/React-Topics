import React from 'react'

const Destructure = () => {
    // const colors=['red','gren','blue'];
    // const[color1,color2,color3]=colors

    const person={
        name:'John',
        age:23,
        address:{
            city:'Telengae',
            country:'India'
        }
    }
    const{name,age,address:{city,country}}=person
  return (
    //Array
    /*<div>
      <p>Color1:{color1}</p>
      <p>Color2:{color2}</p>
      <p>Color3:{color3}</p>
    </div>*/

     //object
    <div>
       <p>Name:{name}</p>
       <p>Age:{age}</p>
       <p>Address:{city}</p>
       <p>Country:{country}</p>

    </div>
  )
}

export default Destructure
