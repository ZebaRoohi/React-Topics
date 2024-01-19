/*import React from 'react';
function FilterExample() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const filteredNumbers = [];
  const filterData = () => {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        filteredNumbers.push(numbers[i]);
      }
    }
  };
  filterData();
  return <div>{filteredNumbers.join(', ')}</div>;
}
export default FilterExample;*/

import React from 'react'
const FilterExample = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const filteredNumbers = [];
  const filterData = () => {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        filteredNumbers.push(numbers[i]);
      }
    }
  };
  filterData();  
  return (
    <div>{filteredNumbers.join(', ')}</div>
  )
}
export default FilterExample
