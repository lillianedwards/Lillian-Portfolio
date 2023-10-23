import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import brand from '../assets/EdwardsBrand2.svg';



function Header() {
  return (
    
    <Navbar expand="lg" className="bg-body-transparent">
    <Container className='d-flex justify-content-between'>
      <Navbar.Brand href="#home">
      <img
          alt="Portfolio Signature Logo"
          src={brand}
          className="nav-brand"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='fs-1'>
     
          <Link to="/about" className='nav-link'>About</Link>
          <Link to="/work" className='nav-link'>Work</Link>
          <Link to="/contact" className='nav-link'>Contact</Link>
          <Link to="/resume" className='nav-link'>Resume</Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header