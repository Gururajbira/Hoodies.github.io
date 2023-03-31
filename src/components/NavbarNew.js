import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


const NavbarNew = () => {
  return (

    <>

      <Navbar className='navbar' bg="light" expand="lg">
        <Container>
          <Navbar.Brand className='navlogo' href="#home"><img src={'https://st3.depositphotos.com/5142301/12766/v/600/depositphotos_127668956-stock-illustration-h-letter-logo-in-golden.jpg'} alt="logo" />Hoodies</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='Home-style' href="#home">Home</Nav.Link>
              {/* <Nav.Link href="cart">Cart</Nav.Link> */}
              <NavLink className={'nav-link'} to={'cart'}>Cart</NavLink>
              {/* <NavLink className={'nav-link'} to={'cart'}>Cart</NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>


  )
}

export default NavbarNew;