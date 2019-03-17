import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  handleLogout() {
    localStorage.setItem("username", "")
    window.location.href = "/"
  }

  render() {
    let userLoggedIn = localStorage.getItem("username").length > 0
    console.log('====userLoggedIn====', userLoggedIn)
    return (
      <Navbar bg="primary" variant="dark" className="fixed-top w-100">
        <Navbar.Brand href="/">DevCompanion</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/shared">Shared</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
        </Nav>
        {userLoggedIn ? <Button onClick={this.handleLogout.bind(this)} className="btn btn-danger float-right"><strong>Logout</strong></Button> : <div></div>}
      </Navbar>
    );
  }
}