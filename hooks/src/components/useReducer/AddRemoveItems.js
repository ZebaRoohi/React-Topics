import React, { useReducer } from 'react'

const updatingList=(state,action)=>{
    switch(action.type){
        case 'Add':
            return {items:action.payload}
        case 'Remove':
            return(item=>item!==action.payload)
        default:
            return state
    }
}

const AddRemoveItems = () => {
    const[state,dispatch]=useReducer(updatingList,{items:[]})
  return (
    <div>
      <h3>Add and Remove Items</h3>
      <p>{state.items}</p>
      <button onClick={()=>dispatch({type:'Add',payload:'item'})}>Add</button>
      <button onClick={()=>dispatch({type:'Remove',payload:'item'})}>Remove</button>
    </div>
  )
}

export default AddRemoveItems
