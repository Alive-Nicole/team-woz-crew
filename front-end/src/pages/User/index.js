import React, {Component} from 'react';
import axios from 'axios';
import ImageUploader from 'react-images-upload';
import { Container, Row, Col, Button, Jumbotron, Image } from 'react-bootstrap';
import Editable from '../../components/Editable';

require("./index.css");

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: "", picture: ["https://via.placeholder.com/300/09f/fff.png"] },
      edit: false,
      password: "",
      newPassword: "",
      confNewPassword: "",
      noMatch: false,
      rejected: false,
      btnEdit: false,
      clicked: false
    };
  }

  componentDidMount() {
    axios.get("/api/user/profile")
      .then(payload => {
        localStorage.setItem("username", payload.data.username)
        this.setState({ user: payload.data })
        // window.location.reload()
      })
      .catch(err => console.log(err)) 
  }

  onDrop(picture) {
    let reader = new FileReader();
    console.log('====picture====', picture.target.files[0])
    let file = picture.target.files[0];

    reader.onloadend = () => {
      let newUserObj = this.state.user
      newUserObj.picture = reader.result
      this.setState({
        user: newUserObj
      });
    }

    reader.readAsDataURL(file)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    if(name === "interests" || name === "languages" || name === "technologies"){
      // const splitValue = value.split(",");
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
  moveCaretAtEnd(e) {
    var temp_value = e.target.value
    e.target.value = ''
    e.target.value = temp_value
  }

  handleFormDisplay() {
    if(this.state.edit === false){
      this.setState({edit: true})
    }else {
      this.setState({edit: false})
    }
  }

  handlePasswordChange() {
    const { user, password, newPassword, confNewPassword } = this.state;

    if(newPassword === confNewPassword){
      axios.post(`/api/user/change-password/${user.username}`, {password, newPassword})
      .then(payload => {
        if(payload.data.status === 401){
          this.setState({rejected: true})
        }else if(payload.status === 200){
          this.setState({ user: payload.data, edit: false })
          this.props.history.push("/")
        }
      })
      .catch(err => console.log(err)) 
    }
  }

  handleProfileUpdate() {
    const { user } = this.state
    console.log('====called====', user.username)
    axios.post("/api/user/update", user)
    .then(payload => {
      if(payload.data.status === 401){
        this.setState({rejected: true})
      }else if(payload.status === 200){
        this.setState({ user: payload.data })
        this.props.history.push("/profile")
      }
    })
    .catch(err => console.log(err)) 
    this.handleInteraction()
  }

  handleInteraction() {
    const { clicked } = this.state
    
    let flip = clicked ? false : true
    this.setState({ clicked: flip })
  }
  
  render() {
    let { user, noMatch, newPassword, confNewPassword, clicked, rejected, edit, disabled } = this.state;
    if ( user.name === "" ) return <p>Loading ...</p>;
    noMatch = newPassword !== confNewPassword ? true : false;
    console.log('====this.state====', user)
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
                  {/* <ImageUploader
                    withIcon={true}
                    buttonText='Choose Profile Image'
                    onChange={this.onDrop.bind(this)}
                    imgExtension={[' .jpg, ', ' .gif, ', ' .png, ', ' .gif']}
                    maxFileSize={345847985}
                  />   */}
              {/* </Col>  */}
                <br></br>
                <input name="foo" type="file" onChange={this.onDrop.bind(this)} />
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
            <div>
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
                  <p>{user.languages.join(",")}</p> 
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
                  <p>{user.technologies.join(",")}</p> 
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
                  <p>{user.interests.join(",")}</p> 
                }
              </Col>
            </Row>
          </Col> 
        </Row>
        <br></br>
        <Row>
        <Col></Col>          
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
                    <button className="btn btn-primary" type="button" onClick={this.handlePasswordChange.bind(this)} className="btn btn-primary">Submit Change</button>                
                  </Col>
                  <Col>
                    <button className="btn btn-primary" type="button" onClick={this.handleFormDisplay.bind(this)}>Hide</button>              
                  </Col>
                </Row>
              </form> : <Button onClick={this.handleFormDisplay.bind(this)}>Change Password</Button> }
          </Col>
          <Col></Col>
          <Col></Col>
          <Col>
              { clicked ? 
                <Button onClick={this.handleProfileUpdate.bind(this)}>Submit Changes</Button> : 
                <Button onClick={this.handleInteraction.bind(this)}>Edit Profile</Button> }
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}