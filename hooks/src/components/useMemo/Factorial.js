import React, { useState, useMemo } from 'react';

const FactorialCalculator = () => {
  const [number, setNumber] = useState('');

  const calculateFactorial = (n) => {
    if (isNaN(n) || n < 0) {
      return 'Invalid input';
    }

    if (n === 0 || n === 1) {
      return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }

    return result;
  };

  const factorial = useMemo(() => calculateFactorial(parseInt(number)), [number]);

  return (
    <div>
      <p>Factorial is: {factorial}</p>
      <input
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button>Calculate Factorial</button>
    </div>
  );
};

export default FactorialCalculator;
