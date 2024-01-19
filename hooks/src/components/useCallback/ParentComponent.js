import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponenet';


const ParentComponent = () => {
  const [parentState, setParentState] = useState('');
  const handleChildButtonClick = useCallback(() => {
   setParentState('Button clicked in child!');
   console.log('Button clicked in child component')
  }, []);

  return (
    <div>
      <p>Parent State: {parentState}</p>
      <ChildComponent onChildButtonClick={handleChildButtonClick} childProp="Hello from Parent" />
    </div>
  );
};

export default ParentComponent;
