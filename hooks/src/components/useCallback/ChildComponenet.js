import React from 'react';

const ChildComponent = ({ onChildButtonClick, childProp }) => {
  return (
    <div>
      <p>Child Prop: {childProp}</p>
      <button onClick={onChildButtonClick}>Click in Child</button>
    </div>
  );
};

export default ChildComponent;
