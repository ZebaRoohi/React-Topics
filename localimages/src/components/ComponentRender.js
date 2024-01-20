import React, { useState } from 'react';
const ConditionalComponentRendering = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      {showComponent && <MyComponent />}
    </div>
  );
};
const MyComponent = () => {
  return <p>This component is rendered conditionally.</p>;
};
export default ConditionalComponentRendering;
