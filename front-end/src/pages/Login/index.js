import React, { Component } from 'react';
require("./index.css");

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    console.log("name", name, "value", value)
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    // this.setState({ username: "", password: "" });
    fetch("/api/auth/login")
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