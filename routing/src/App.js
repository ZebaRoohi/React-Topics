//Normal routing
/*import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
  <Router>
<div>
  <nav className='navbar'>
    <ul className='nav-list'>
      <li className='nav-item'><Link to='/' className='nav-link'>Home</Link> </li>
        <li className='nav-item'><Link to='/about' className='nav-link'>About</Link></li>
        <li className='nav-item'><Link to='/contact' className='nav-link'>Contact</Link></li>
     
    </ul>
  </nav>
</div>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;*/

//Use params
/*
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './components/useParas/Home';
import About from './components/useParas/About';
import NotFound from './components/useParas/NotFound';


function App() {
  return (
    <div className="App">
  <Router>
<div>
  <nav className='navbar'>
    <ul className='nav-list'>
      <li className='nav-item'><Link to='/' className='nav-link'>Home</Link> </li>
        <li className='nav-item'><Link to='/about/react' className='nav-link'>About React</Link></li>
        <li className='nav-item'><Link to='/about/javascript' className='nav-link'>About Javascript</Link></li> 
    </ul>
  </nav>
</div>

    <Routes>
   <Route path='/' element={<Home />}/>
   <Route path='/about/:topic' element={<About />} />
   <Route path='*' element={<NotFound />}/>
    </Routes>
  </Router>
    </div>
  );
}

export default App;*/

//Nested Routing
/*import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import Location from './components/Location';
function App() {
  return (
    <div className="App">
  <Router>
<div>
  <nav className='navbar'>
    <ul className='nav-list'>
      <li className='nav-item'><Link to='/' className='nav-link'>Home</Link> </li>
        <li className='nav-item'><Link to='/about' className='nav-link'>About</Link></li>
        <li className='nav-item'><Link to='/contact' className='nav-link'>Contact</Link></li>
        <li className='nav-item'><Link to='/dashboard' className='nav-link'>Dashboard</Link></li>
        <li className='nav-item'><Link to='/location' className='nav-link'>LocationInfo</Link></li>
     
    </ul>
  </nav>
</div>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/dashboard/*' element={<Dashboard />} />
      <Route path='/location' element={<Location />}/>
    </Routes>
  </Router>
    </div>
  );
}

export default App;*/

//useNavigation with useParams...
/*import React from 'react'
import { BrowserRouter as Router,Routes,Route ,Link} from 'react-router-dom'
import Home from './components/useNavigate/Home'
import About from './components/useNavigate/About'
import UserDetail from './components/useNavigate/UserDetail'
import UserProfile from './components/useNavigate/UserProfile'

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul style={{display:'flex',gap:'20px'}}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/user/123'>User Details</Link></li>
            <li><Link to='/profile'>User Profile</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/user/:userId' element={<UserDetail />}/>
          <Route path='/profile' element={<UserProfile />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
*/
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/NavbarwithMui/RespnsiveBar';
import Home from './components/NavbarwithMui/Home';
import About from './components/NavbarwithMui/About';
import Contact from './components/NavbarwithMui/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveAppBar  />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

