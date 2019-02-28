import React, {Component} from 'react';
import axios from 'axios';

require("./index.css");

export default class NewUser extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      username: '',
      password: '',
      retypedPassword: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      gitHub: '',
      linkedIn: '',
      aboutYou: '',
      languages:[],
      technologies:[],
      interests:[],
      rejected: false
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    if(name.includes("languages", "technologies", "interests")){
      const splitValue = value.split(",");
      
      this.setState({
        [name]: splitValue
      });  
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    const payload = this.state 

    axios.defaults.baseURL = "http://localhost:3001";
    axios.post('/api/auth/signup', payload)
    .then(payload => {
      if(payload.message === "Success!"){        
        this.props.history.push('/');
      }
    })
    .catch(err => {
      if(err.response.status === 401 || err.response.status === 400) {
        this.setState({rejected: true});
      }
    });
  }

  render() {
    this.state.rejected = this.state.password !== this.state.retypedPassword ? true : false;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card border-primary">
              <div className="card-header">Sign Up</div>
              <div className="card-body text-left">
                <div className="form-group">
                  <label>User Name:</label>
                  <input
                    name="username"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Provide a Username."
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    name="password"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Provide a password."
                  />
                </div>
                <div className="form-group">
                  <label>Retype Password:</label>
                  <input
                    name="retypedPassword"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Please confirm password."
                  />
                </div>
                {this.state.rejected ? <small>Passwords Do Not Match!</small> : <div></div>}
                <div className="form-group">
                  <label>FirstName:</label>
                  <input
                    name="firstName"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Enter first name."
                  />
                </div>
                <div className="form-group">
                  <label>LastName:</label>
                  <input
                    name="lastName"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Enter last name."
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number:</label>
                  <input
                    name="phone"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Enter phone number."
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    name="email"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Enter email address."
                  />
                </div>
                <div className="form-group">
                  <label>GitHub Profile:</label>
                  <input
                    name="github"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Enter github profile link."
                  />
                </div>
                <div className="form-group">
                  <label>linkedIn profile:</label>
                  <input
                    name="linkedIn"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Enter linked in profile."
                  />
                </div>
                <div className="form-group">
                  <label>About You:</label>
                  <input
                    name="aboutYou"
                    disabled={this.state.disabled}
                    type="textarea"
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Tell us a bit about yourself."
                  />
                </div>
                <div className="form-group">
                  <label>languages:</label>
                  <input
                    name="languages"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Enter languages separated by comas."
                  />
                </div>
                <div className="form-group">
                  <label>Technologies:</label>
                  <input
                    name="technologies"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Enter list of technologies separeted by comas."
                  />
                </div>
                <div className="form-group">
                  <label>Interests:</label>
                  <input
                    name="interests"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Enter interests separated by comas."
                  />
                </div>
                {this.state.rejected ? <div><small>Username Exists, Please Choose Another</small><br></br></div> : <div></div>}
                <button
                  type="button"
                  disabled={this.state.disabled}
                  className="btn btn-primary"
                  onClick={this.handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}