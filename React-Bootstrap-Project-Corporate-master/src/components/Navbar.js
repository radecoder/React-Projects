// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import klogo from '../assets/images/klogo.webp';

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
            <Image src={klogo} alt="Kanchan Logo" width="300" height="300" className="d-inline-block align-top me-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home" className={({ isActive }) => isActive ? "text-uppercase active-link" : "text-uppercase"}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className={({ isActive }) => isActive ? "text-uppercase active-link" : "text-uppercase"}>
                About Us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/courses" className={({ isActive }) => isActive ? "text-uppercase active-link" : "text-uppercase"}>
                Academic
              </Nav.Link>
              <Nav.Link as={NavLink} to="/gallery" className={({ isActive }) => isActive ? "text-uppercase active-link" : "text-uppercase"}>
                Gallery
              </Nav.Link>
              <Nav.Link as={NavLink} to="/mandatory" className={({ isActive }) => isActive ? "text-uppercase active-link" : "text-uppercase"}>
                Mandatory
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className={({ isActive }) => isActive ? "text-uppercase active-link" : "text-uppercase"}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default AppNavbar;
