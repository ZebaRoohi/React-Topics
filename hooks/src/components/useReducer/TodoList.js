import React, { useReducer, useState } from 'react'

const updatingList=(state,action)=>{
    switch(action.type){
        case 'Add':
            return {items:[...state.items,action.payload]}
        case 'Remove':
            return{items:state.items.filter(item=>item!==action.payload)}
        default:
            return state
    }
}

const TodoList = () => {
    const[inputValue,setInputValue]=useState('');
    const[state,dispatch]=useReducer(updatingList,{items:[]})

    const handleChange=(e)=>{
        setInputValue(e.target.value)
    }
    const AddItems=()=>{
        if(inputValue.trim()!==''){
            dispatch({type:'Add',payload:inputValue})
        }
        setInputValue('')
    }
  return (
    <div>
      <h3>Add and Remove Items</h3>
      <input type='text' value={inputValue} onChange={handleChange} placeholder='Enter some Items....' />
      <button onClick={AddItems}>Add</button>
      <ul>
        {state.items.map((item,index)=>(

            <li key={index}>{item}
              <button onClick={()=>dispatch({type:'Remove',payload:item})}>Remove</button>
            </li>
        ))}
      </ul>
    
    </div>
  )
}

export default TodoList
