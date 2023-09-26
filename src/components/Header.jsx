import React from 'react'
import  './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">
            <img className='ps-2' src={logo} alt='' width={'100px'} height={'100px'}></img>
        </Navbar.Brand>
        <Navbar.Toggle className='me-3'  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end me-3' >
          <Nav>
            <Nav.Link style={{color:'balck', fontSize:'20px', fontWeight:'bolder'}} className='btn btn-primary nav-link' href="/Home">Home</Nav.Link>
            <Nav.Link style={{color:'balck', fontSize:'20px', fontWeight:'bolder'}} className='btn btn-warning' href="/Login">Login</Nav.Link>
            <Nav.Link style={{color:'balck', fontSize:'20px', fontWeight:'bolder'}} className='btn btn-success' href="/Register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header