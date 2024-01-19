import React, { useMemo, useState } from 'react';
const SquareCalculator = () => {
  const [number, setNumber] = useState();
  const squaredValue = useMemo(() => {
    console.log('Calculating square...');
    return number * number;
  }, [number]);
  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value, 10))} />
      <p>Square of {number} is: {squaredValue}</p>
    </div>
  );
};

export default SquareCalculator;
