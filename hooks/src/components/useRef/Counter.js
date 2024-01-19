import React, { useRef } from 'react'

export default function Counter() {
    let counter=useRef(0);
function handleClick(){
    counter.current=counter.current+1;
    alert(`You clicked ${counter.current} times`);
}
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}


