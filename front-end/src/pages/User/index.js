import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

require("./index.css");

export default class User extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
=======
  constructor( props ) {
    super( props );
>>>>>>> styling and functionality updates
    this.state = {
      user: { name: "", picture: ["https://via.placeholder.com/300/09f/fff.png"] },
      edit: false,
      password: "",
      newPassword: "",
      confNewPassword: "",
      noMatch: false,
      rejected: false,
      btnEdit: false,
      clicked: false,
      updateFlag: false
    };
  }

  componentDidMount() {
    axios.get("/api/user/profile")
      .then( payload => {
        this.setState({ user: payload.data })
      })
      .catch(err => console.log( err )) 
  }

  onDrop( picture ) {
    const reader = new FileReader();
    const file = picture.target.files[0];

    reader.onloadend = () => {
      let newUserObj = this.state.user
      newUserObj.picture = reader.result
      this.setState({
        user: newUserObj
      });
    }

    reader.readAsDataURL( file )
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    if( name === "interests" || name === "languages" || name === "technologies" ){
      let newUserObj = this.state.user
      newUserObj[name] = value
      this.setState({
        user: newUserObj
      });
    } else {
      let newUserObj = this.state.user
      newUserObj[name] = value
      this.setState({
        user: newUserObj
      });
    }
  };

  moveCaretAtEnd( e ) {
    var temp_value = e.target.value
    e.target.value = ''
    e.target.value = temp_value
  }

  handleFormDisplay() {
    if( this.state.edit === false ){
      this.setState({ edit: true })
    }else {
      this.setState({ edit: false })
    }
  }

  handlePasswordChange() {
    const { user, password, newPassword, confNewPassword } = this.state;

    if( newPassword === confNewPassword ){
      axios.post(`/api/user/change-password/${ user.username }`, { password, newPassword })
      .then( payload => {
        if( payload.data.status === 401 ){
          this.setState({ rejected: true })
        }else if( payload.status === 200 ){
          this.setState({ user: payload.data, edit: false })
          this.props.history.push("/")
        }
      })
      .catch(err => console.log( err )) 
    }
  }

  handleProfileUpdate() {
    const { user } = this.state
    axios.post("/api/user/update", user)
    .then( payload => {
      if( payload.data.status === 401 ){
        this.setState({ rejected: true })
      }else if( payload.status === 200 ){
        this.setState({ user: payload.data })
        this.props.history.push("/profile")
      }
    })
    .catch(err => console.log( err )) 
    this.handleInteraction()
  }

  handleInteraction() {
    const { clicked } = this.state
    
    let flip = clicked ? false : true
    this.setState({ clicked: flip })
  }

  delete() {
    const { user } = this.state
    console.log('====called====', user._id)
    axios.get('api/user/delete:/id', user)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
}

  render() {
    let { user, noMatch, newPassword, confNewPassword, clicked, rejected, edit, disabled } = this.state;
    
    if ( user.name === "" ) return <a href="/"><h4 className="center">No User Logged In Click To Go To Login Page</h4></a>;
    noMatch = newPassword !== confNewPassword ? true : false;

    return (
      <Container fluid={true}>
        <Row>
          <Col>
          { user && clicked ? 
            <Row>
              <Col></Col>
              <Col></Col>
              <Col className="center">
                <Image 
                  className="w-100 profile" 
                  src={this.state.user.picture[0]} 
                  alt="https://via.placeholder.com/300/09f/fff.png" 
                  rounded
                  fluid
                  />
                <br></br>                
                <div className="file">
                  <label className="file-label" for="inputGroupFile01">Choose file</label>
                  <input type="file" variant="dark" className="file-input" />
                </div>
                <br></br>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            : <Row>
              <Col></Col>
              <Col></Col>
              <Col>
                <Image className="w-100" src={user.picture[0]} rounded fluid />
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
          }
          </Col>
         
        </Row>
        <Row>
          <Col>
            <div >
              <strong><label>First Name:</label></strong>
              {clicked ?
                <div>
                  <input 
                    name="firstName" 
                    value={user.firstName}
                    onChange={this.handleInputChange}                
                    onFocus={this.moveCaretAtEnd}
                    type="text" 
                    />
                </div> :
                <p>{user.firstName}</p> 
              }
            </div>
            <div>
              <strong><label>Last Name:</label></strong>
              {clicked ?
                <div>
                  <input 
                    name="lastName" 
                    value={user.lastName}
                    onChange={this.handleInputChange}                
                    onFocus={this.moveCaretAtEnd}
                    type="text" 
                    />
                </div> :
                <p>{user.lastName}</p> 
              }
            </div>
          <div>
            <strong><label>Phone Number:</label></strong>
              {clicked ?
                <div>
                  <input 
                    name="phone" 
                    value={user.phone}
                    onChange={this.handleInputChange}                
                    onFocus={this.moveCaretAtEnd}
                    type="text" 
                    />
                </div> :
                <p>{user.phone}</p> 
              }
            </div>
          </Col>
          <Col>
            <div>
              <strong><label>Email:</label></strong>
              {clicked ?
                <div>
                  <input 
                    name="email" 
                    value={user.email}
                    onChange={this.handleInputChange}                
                    onFocus={this.moveCaretAtEnd}
                    type="text" 
                    />
                </div> :
                <p>{user.email}</p> 
              }
            </div>
            <div>
              <strong><label>LinkedIn:</label></strong>
              {clicked ?
                <div>
                  <input 
                    name="linkedIn" 
                    value={user.linkedIn}
                    onChange={this.handleInputChange}                
                    onFocus={this.moveCaretAtEnd}
                    type="text" 
                  />
                </div> :
                <p>{user.linkedIn}</p> 
              }
            </div>
            <div>
              <strong><label>Github:</label></strong>
              {clicked ?
                <div>
                  <input 
                    name="github" 
                    value={user.github}
                    onChange={this.handleInputChange}                
                    onFocus={this.moveCaretAtEnd}
                    type="text" 
                  />
                </div> :
                <p>{user.github}</p> 
              }
            </div>
          </Col>
          <Col>
            <Row>
              <Col>
                <strong><label>Languages:</label></strong>
                { clicked ?
                  <div>
                    <input 
                      name="languages" 
                      value={user.languages}
                      onChange={this.handleInputChange}                
                      onFocus={this.moveCaretAtEnd}
                      type="text" 
                    /> 
                  </div> :
                  <p>{Array.isArray(user.languanges) ? user.languages.join(",") : user.languages}</p> 
                }
              </Col>
            </Row>
            <Row>
              <Col>
                <strong><label>Technologies:</label></strong>
                { clicked ?
                  <div>
                    <input 
                      name="technologies" 
                      value={user.technologies}
                      onChange={this.handleInputChange}                
                      onFocus={this.moveCaretAtEnd}
                      type="text" 
                    /> 
                  </div> :
                  <p>{Array.isArray(user.technologies) ? user.technologies.join(",") : user.technologies}</p> 
                }    
              </Col>
            </Row>
            <Row>
              <Col>
                <strong><label>Interests:</label></strong>
                { clicked ?
                  <div>
                    <input 
                      name="interests" 
                      value={user.interests}
                      onChange={this.handleInputChange}                
                      onFocus={this.moveCaretAtEnd}
                      type="text" 
                    /> 
                  </div> :
                  <p>{Array.isArray(user.interests) ? user.interests.join(",") : user.interests}</p> 
                }
              </Col>
            </Row>
          </Col> 
        </Row>
        <br></br>
        <Row>
          <Col>
            {edit ?
              <form className="form">
                <input
                      name="password"
                      disabled={disabled}
                      type="text"
                      onChange={this.handleInputChange.bind(this)}
                      className="form-control"
                      placeholder="Enter Current Password."
                    />
                  <input
                      name="newPassword"
                      disabled={disabled}
                      type="text"
                      onChange={this.handleInputChange.bind(this)}
                      className="form-control"
                      placeholder="Enter New Password."
                    />
                  <input
                      name="confNewPassword"
                      disabled={disabled}
                      type="text"
                      onChange={this.handleInputChange.bind(this)}
                      className="form-control"
                      placeholder="Confirm New Password."
                    />
                {noMatch ? <small>Passwords Do Not Match!</small> : <div></div>}
                {rejected ? <small>Old Password Is Incorrect!</small> : <div></div>}
                
                <br></br>
                <Row>
                  <Col>
                    <Button variant="dark" className="btn btn-primary" type="button" onClick={this.handlePasswordChange.bind(this)} className="btn btn-primary">Submit Change</Button>                
                  </Col>
                  <Col>
                    <Button variant="dark" className="btn btn-primary" type="button" onClick={this.handleFormDisplay.bind(this)}>Hide</Button>
                  </Col>
                </Row>
              </form> : <Button variant="dark" onClick={this.handleFormDisplay.bind(this)}>Change Password</Button> }
          </Col>
          <Col>
              { clicked ? 
<<<<<<< HEAD
<<<<<<< HEAD
                <Button onClick={this.handleProfileUpdate.bind(this)}>Submit Changes</Button> : 
              <Button onClick={this.handleInteraction.bind(this)}>Edit Profile</Button>  }
              
          </Col>

          <Col>
           <Button type="button" onClick={this.delete} className="btn btn-danger">Delete Profile</Button>
=======
                <Button variant="outline-secondary" onClick={this.handleProfileUpdate.bind(this)}>Submit Changes</Button> : 
                <Button variant="outline-secondary" onClick={this.handleInteraction.bind(this)}>Edit Profile</Button> }
>>>>>>> logout button is persisting through page change
=======
                <Button variant="dark" onClick={this.handleProfileUpdate.bind(this)}>Submit Changes</Button> : 
                <Button variant="dark" onClick={this.handleInteraction.bind(this)}>Edit Profile</Button> }
>>>>>>> styling and functionality updates
          </Col>
        </Row>
        

      </Container>
      
    )
  }
}