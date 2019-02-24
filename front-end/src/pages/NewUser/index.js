import React, {Component} from 'react';
import axios from 'axios';

require("./index.css");

export default class NewUser extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      disabled: false,
      userName: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      gitHub: '',
      linkedIn: '',
      aboutYou: '',
      languages:[],
      technologies:[],
      interests:[]
    }
  }

  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    if(name.includes("languages", "technologies", "interests")){
      const splitValue = value.split(",")
      
      console.log("name", name, "value", value)
      this.setState({
        [name]: value.split(",")
      });  
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  async submit() {
    this.setState({
      disabled: true,
    });

    await axios.post('/api/auth/signup', {
      userName: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      gitHub: this.gitHub,
      linkedIn: this.linkedIn,
      aboutYou: this.aboutYou,
      languages: this.languages[String],
      technologies: this.technologies[String],
      interests: this.interests[String]
    });

    this.props.history.push('/');
    console.log(this.state)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card border-primary">
              <div className="card-header">Sign Up</div>
              <div className="card-body text-left">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">User Name:</label>
                  <input
                    name="userName"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Provide a username."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">FirstName:</label>
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
                  <label htmlFor="exampleInputEmail1">LastName:</label>
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
                  <label htmlFor="exampleInputEmail1">Phone Number:</label>
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
                  <label htmlFor="exampleInputEmail1">Email:</label>
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
                  <label htmlFor="exampleInputEmail1">GitHub Profile:</label>
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
                  <label htmlFor="exampleInputEmail1">linkedIn profile:</label>
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
                  <label htmlFor="exampleInputEmail1">About You:</label>
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
                  <label htmlFor="exampleInputEmail1">languages:</label>
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
                  <label htmlFor="exampleInputEmail1">Technologies:</label>
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
                  <label htmlFor="exampleInputEmail1">Interests:</label>
                  <input
                    name="interests"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Enter interests separated by comas."
                  />
                </div>

                <button
                  disabled={this.state.disabled}
                  className="btn btn-primary"
                  onClick={() => {this.submit()}}>
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