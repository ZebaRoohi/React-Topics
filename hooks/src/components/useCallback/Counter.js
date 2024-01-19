import {useCallback, useState} from 'react'

const CounterCallback = () => {
    const[count,setCount]=useState(0);
    const handleClick=useCallback(()=>{
        if(count%2===0){
            console.log('Even Numbers')
        }else{
            console.log('Odd numbers')
        }
    },[count])
  return (
    <div>
      <p>Counter Value:{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default CounterCallback
