import { useRef } from "react";


function Form() {
    const inputRef=useRef(null);
function focusButton(){
    //inputRef.current.style.backgroundColor='green'; add color
    inputRef.current.focus();
}
function ClearText(){
    inputRef.current.value='';
}
  return (
    <div>
        <input type='text' ref={inputRef} placeholder='Type here....' />
      <button onClick={focusButton}>Focus Text</button>
      <button onClick={ClearText}>Clear Text</button>
    </div>
  )
}

export default Form
