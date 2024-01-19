import React, { useReducer } from 'react';

const complex=(state,action)=>{
    switch(action.type){
        case 'setName':
            return{...state,name:action.payload}
        case 'setAge':
            return{...state,age:action.payload}
        default:
            return state
    }
}

const ComplexReducer = () => {
    const[state,dispatch]=useReducer(complex,{name:'',age:0});
  return (
    <div>
        <p>Name:{state.name}</p>
        <p>Age:{state.age}</p>
      <button onClick={()=>dispatch({type:'setName',payload:'John'})}>Set Name</button>
      <button onClick={()=>dispatch({type:'setAge',payload:23})}>Set Age</button>
    </div>
  )
}

export default ComplexReducer
