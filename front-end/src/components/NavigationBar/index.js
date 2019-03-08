import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import axios from 'axios';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  handleLogout() {
    axios.get("/api/auth/logout")
      .then(payload => {
        if (payload.status === 200){
          // this.props.history.push("/")
          localStorage.setItem("username", "")
          this.setState({redirect: true})
          // console.log('====this.props====', this.props)
        }
      })
      .catch(err => console.log('====err====', err))
  }

  render() {
    // console.log('====local====', )
    let userLoggedIn = localStorage.getItem("username").length > 0
    return (
      <Navbar bg="primary" variant="dark" className="fixed-top w-100">
        <Navbar.Brand href="/">DevCompanion</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/shared">Shared</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
        {userLoggedIn ? <Button onClick={this.handleLogout.bind(this)} className="btn btn-danger float-right"><strong>Logout</strong></Button> : <div></div>}
      </Navbar>
    );
  }
}