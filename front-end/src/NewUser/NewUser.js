import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import ImageUploader from 'react-images-upload';

class NewUser extends Component {
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
    },
    this.state =  picture ,
         this.onDrop = this.onDrop.bind(this);
  }
  onDrop(picture) {
    this.setState({
        picture: this.state.pictures.concat(picture),
    });
}

  updateuserName(value) {
    this.setState({
      userName: value,
    });
  }

  updatefirstName(value) {
    this.setState({
      firstName: value,
    });
  }
  updatelastName(value) {
    this.setState({
      lastName: value,
    });
  }
updatephone(value) {
    this.setState({
      phone: value,
    });
  }
updateemail(value) {
    this.setState({
      email: value,
    });
  }
updategitHub(value) {
    this.setState({
      gitHub: value,
    });
  }
updatelinkedIn(value) {
    this.setState({
      linkedIn: value,
    });
  }
updatelanguages(value) {
    this.setState({
      languages: this.state.languages.push(value),
    });
  }
updatetechnologies(value) {
    this.setState({
      technologies: this.state.technologies.push(value),
    });
  }
updateinterests(value) {
    this.setState({
      interests: this.state.interests.push(value),
    });
  }

  async submit() {
    this.setState({
      disabled: true,
    });

    await axios.post('http://localhost:4000/user', {
      picture: this.state.picture,
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
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(e) => {this.updateuserName(e.target.value)}}
                    className="form-control"
                    placeholder="Provide a username."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">FirstName:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(e) => {this.updatefirstName(e.target.value)}}
                    className="form-control"
                    placeholder="Enter first name."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">LastName:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(e) => {this.updatelastName(e.target.value)}}
                    className="form-control"
                    placeholder="Enter last name."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Phone Number:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(e) => {this.updatephone(e.target.value)}}
                    className="form-control"
                    placeholder="Enter phone number."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(e) => {this.updateemail(e.target.value)}}
                    className="form-control"
                    placeholder="Enter email address."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">GitHub Profile:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(e) => {this.updategitHub(e.target.value)}}
                    className="form-control"
                    placeholder="Enter github profile link."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">linkedIn profile:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(e) => {this.updatelinkedIn(e.target.value)}}
                    className="form-control"
                    placeholder="Enter linked in profile."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">About You:</label>
                  <input
                    disabled={this.state.disabled}
                    type="textarea"
                    onBlur={(e) => {this.updateaboutYou(e.target.value)}}
                    className="form-control"
                    placeholder="Tell us a bit about yourself."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">languages:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(e) => {this.updatelanguages(e.target.value)}}
                    className="form-control"
                    placeholder="Enter languages separated by comas."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Technologies:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(e) => {this.updatetechnologies(e.target.value)}}
                    className="form-control"
                    placeholder="Enter list of technologies separeted by comas."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Interests:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(e) => {this.updateinterests(e.target.value)}}
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
    ),
    (
      <ImageUploader
          withIcon={true}
          buttonText='Choose images'
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
      />
  );
  }
}

export default withRouter(NewUser);