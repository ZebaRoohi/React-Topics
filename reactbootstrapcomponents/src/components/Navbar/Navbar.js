import { Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import BootstrapNavbar from 'react-bootstrap/Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
const CustomNavbar = () => {
  return (
    <>
      <BootstrapNavbar bg="dark" variant="dark">
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/">Navbar</BootstrapNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<About />} />
        <Route path="/pricing" element={<Contact />} />
      </Routes>
    </>
  );
};

export default CustomNavbar;
