import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" className="fixed-top">
      <Navbar.Brand href="/">DevCompanion</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/shared">Shared</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
      </Nav>
    </Navbar>
  );
}


export default NavBar;