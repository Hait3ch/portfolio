import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar
      collapseOnSelect
      expand='md'
      fixed='top'
      className='navbar-background'
      variant='dark'
      style={{
        transition: "1s ease",
      }}
    >
      <Navbar.Brand as={Link} to='/'>
        {/* <Navbar.Brand href="#home"> */}
        <img src={logo} height='28' className='d-inline-block align-top' alt='logo' />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#about'>About</Nav.Link>
          <Nav.Link href='#projects'>Projects</Nav.Link>
          <Nav.Link href='#contact'>Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to='/teambuilder'>
            Team builder
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
