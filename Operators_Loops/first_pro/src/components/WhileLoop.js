import React from 'react'

const WhileLoop = () => {
    const numbers=[];
    let currentNumbers=1;
    while(currentNumbers<=5){
        numbers.push(<li key={currentNumbers}>{currentNumbers}</li>)
        currentNumbers++;
    }
  return (
    <div>
        <h3>Example of While loop</h3>
      <ul>
        <p>{numbers}</p></ul>
    </div>
  )
}

export default WhileLoop
