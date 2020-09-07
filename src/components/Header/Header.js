import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const Header = () => {
  const navBg = {
    backgroundColor: "#5146ef",
  }
  return (
      <Navbar collapseOnSelect expand="lg" style={navBg} variant="dark">
      <Navbar.Brand href="#home">Hero Courses</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#courses">Courses</Nav.Link>
          <Nav.Link href="#cart"> Cart </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;