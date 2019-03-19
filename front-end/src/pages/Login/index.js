import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

require("./index.css");

export default class Login extends Component {
  constructor( props ) {
    super(props );
    this.state = {
      username: "",
      password: "",
      rejected: false
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
  
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    axios.post("/api/auth/login", {
      username: this.state.username, password: this.state.password
    })
    .then(payload => {
      if(payload.status === 200){
        this.props.history.push("/home", { loggedIn: true })
      }
    })
    .catch(err => {
      if(err.response.status === 401 || err.response.status === 400) {
        this.setState({ rejected: true });
      }
    })
  };

  handleSignupRedirect = event => {
    event.preventDefault();
    this.props.history.push("/new-user", { loggedIn: false })
  }

  render() {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center login">
        <form className="d-flex flex-column justify-content-center align-items-center w-25">
          <div className="form-group w-100">
            <label>Username</label>
            <input 
              type="text" 
              name="username"
              className="form-control"
              value={ this.state.username } 
              onChange={ this.handleInputChange.bind(this) } 
              placeholder="Username"
            />
          </div>
          <div className="form-group w-100">
            <label>Password</label>
            <input 
              type="password"
              name="password" 
              className="form-control" 
              value={ this.state.password } 
              onChange={ this.handleInputChange.bind(this) } 
              placeholder="Password"
            />
          </div>
          {this.state.rejected ? <small>Username Or Password Is Incorrect</small> : <div></div>}
          <Button type="button" variant="dark" className="btn w-100" onClick={this.handleFormSubmit.bind( this )}>Login</Button><br></br>
          <Button type="button" variant="dark" className="btn w-100" onClick={this.handleSignupRedirect.bind( this )}>SignUp</Button>
        </form>
      </div>
    )
  }
}