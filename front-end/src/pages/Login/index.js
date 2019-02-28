import React, { Component } from 'react';
import axios from 'axios';
require("./index.css");

export default class Login extends Component {
  constructor(props) {
    super(props);
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

    axios.defaults.baseURL = "http://localhost:3001"
    axios.post("/api/auth/login", {
      username: this.state.username, password: this.state.password
    })
    .then(payload => {
      if(payload.status === 200){
        const { username } = payload.data.user;
        this.props.history.push({
          pathname: "/user",
          state: { payload: username }
        })
      }
    })
    .catch(err => {
      if(err.response.status === 401 || err.response.status === 400) {
        this.setState({rejected: true});
      }
    })
  };

  render() {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center login">
        <form className="d-flex flex-column justify-content-center align-items-center w-25">
          <h4 className="text-center">Login</h4>
          <div className="form-group w-100">
            <label>Username</label>
            <input 
              type="text" 
              name="username"
              className="form-control"
              value={this.state.username} 
              onChange={this.handleInputChange} 
              placeholder="Enter Username"
            />
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
          {this.state.rejected ? <small>Username Or Password Is Incorrect</small> : <div></div>}
          <button type="button" className="btn btn-primary w-100" onClick={this.handleFormSubmit}>Submit</button><br></br>
          <a type="link" className="btn btn-primary w-100" href="/new-user">SignUp</a>
        </form>
      </div>
    )
  }
}