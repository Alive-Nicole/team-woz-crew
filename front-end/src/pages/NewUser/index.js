import React, {Component} from 'react';
import axios from 'axios';
import ImageUploader from 'react-images-upload';

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
      github: '',
      linkedIn: '',
      aboutYou: '',
      languages:[],
      technologies:[],
      interests:[],
      picture:[],
      rejected: false
    
  }

  // this.state = {picture:[]}
  this.onDrop = this.onDrop.bind(this);
} 
// db.User.findAndModify({query: {username: "derp"}, update: {$set: {picture: [], linkedIn: "https://www.linkedin.com/in/abraham-ferguson/", github: "https://github.com/AbrahamFergie"}}, upsert: true})
onDrop(picture) {
  let reader = new FileReader();
  let file = picture[0];

    reader.onloadend = () => {
      let newUserObj = this.state
      newUserObj.picture.push(reader.result)
      this.setState({
        newUserObj
      });
    }

    reader.readAsDataURL(file)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    if(name === "interests" || name === "languages" || name === "technologies"){
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

  
  handleSubmit() {
    axios.post('/api/auth/signup', this.state)
    .then(payload => {
      console.log('====payload====', payload)
      if(payload.data.message === "Success!"){        
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
              <div>
                 <ImageUploader
                   withIcon={true}
                   buttonText='Choose Profile Image'
                   onChange={this.onDrop.bind(this)}
                   imgExtension={['.jpg', '.gif', '.png', '.gif']}
                   maxFileSize={5242880}
                 />
              </div>
              <div className="card-body text-left">
                <div className="form-group">
                  <label>User Name:</label>
                  <input
                    name="username"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange.bind(this)}
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
                    onChange={this.handleInputChange.bind(this)}
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
                    onChange={this.handleInputChange.bind(this)}
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
                    onChange={this.handleInputChange.bind(this)}
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
                    onChange={this.handleInputChange.bind(this)}
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
                    onChange={this.handleInputChange.bind(this)}
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
                    onChange={this.handleInputChange.bind(this)}
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
                    onChange={this.handleInputChange.bind(this)}
                    className="form-control"
                    placeholder="Enter github profile link."
                  />
                </div>
                <div className="form-group">
                  <label>LinkedIn Profile:</label>
                  <input
                    name="linkedIn"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange.bind(this)}
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
                    onChange={this.handleInputChange.bind(this)}
                    className="form-control"
                    placeholder="Tell us a bit about yourself."
                  />
                </div>
                <div className="form-group">
                  <label>Languages:</label>
                  <input
                    name="languages"
                    disabled={this.state.disabled}
                    type="text"
                    onChange={this.handleInputChange.bind(this)}
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
                    onChange={this.handleInputChange.bind(this)}
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
                    onChange={this.handleInputChange.bind(this)}
                    className="form-control"
                    placeholder="Enter interests separated by comas."
                  />
                </div>
                {this.state.rejected ? <div><small>Username Exists, Please Choose Another</small><br></br></div> : <div></div>}
                <button
                  type="button"
                  disabled={this.state.disabled}
                  className="btn btn-primary"
                  onClick={this.handleSubmit.bind(this)}>
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