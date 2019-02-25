import React, { Component } from 'react';
import axios from 'axios';
require("./index.css");

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
  
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    axios.defaults.baseURL = "http://localhost:3001"
    axios.post("/api/auth/login", {username: this.state.username, password: this.state.password})
    .then(payload => console.log("received payload", payload))
  };

  handleSignup = () => console.log("to be setup");

  render() {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center login">
        <form className="d-flex flex-column justify-content-center align-items-center w-25">
          <h4 className="text-center">Login</h4>
          <div className="form-group w-100">
            <label>Email address</label>
            <input 
              type="email" 
              name="username"
              className="form-control" 
              value={this.state.username} 
              onChange={this.handleInputChange}
              aria-describedby="emailHelp" 
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group w-100">
            <label>Password</label>
            <input 
              type="password"
              name="password" 
              className="form-control" 
              value={this.state.password} 
              onChange={this.handleInputChange} 
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="button" className="btn btn-primary w-100" onClick={this.handleFormSubmit}>Submit</button><br></br>
          <a type="link" className="btn btn-primary w-100" href="/new-user">SignUp</a>
        </form>
      </div>
    )
  }
}