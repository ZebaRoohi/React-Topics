//for of loop
import React from 'react'

const LoopExamples = () => {
    const fruits=['Apple','banana','Mango','Kiwi'];
    const fruitsList=[];
    const renderfruits=()=>{
        for(const fruit of fruits){
            // fruitsList.push(fruit) //this will display horizontally
            fruitsList.push(<li key={fruit}>{fruit}</li>)
        }
    }
    renderfruits()
  return (
    <div>
      {fruitsList}
    </div>
  )
}

export default LoopExamples
