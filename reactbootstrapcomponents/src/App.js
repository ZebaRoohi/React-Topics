
/*import './App.css';
import Accordian from './components/Accordian';
import Cards from './components/Card';
import CardCarousel from './components/CardCaroseul';


function App() {
  return (
    <div className="App">
      <Accordian /> 
  <Cards />
      <CardCarousel /> 
    </div>
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomNavbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <CustomNavbar />
    </Router>
  );
};
export default App;

