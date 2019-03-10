import React, {Component} from 'react';
import axios from 'axios';
import ImageUploader from 'react-images-upload';
import { Container, Row, Col, Button, Jumbotron, Image } from 'react-bootstrap';
import Editable from '../../components/Editable';

require("./index.css");

export default class User extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state = {
      user: null,
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
      })
      .catch(err => console.log(err)) 
  }

  onDrop(picture) {
    let reader = new FileReader();
    let file = picture[0];

    reader.onloadend = () => {
      let newUserObj = this.state.user
      newUserObj.picture.push(reader.result)
      this.setState({
        user: newUserObj
      });
    }

    reader.readAsDataURL(file)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    if(name === "interests" || name === "languages" || name === "technologies"){
      const splitValue = value.split(",");
      let newUserObj = this.state.user
      newUserObj[name] = splitValue
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

  handleLogout() {
    axios.get("/api/auth/logout")
      .then(payload => {
        if (payload.status === 200){
          this.props.history.push("/")
        }
      })
      .catch(err => console.log('====err====', err))
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
          this.setState({ user: payload, edit: false })
          this.props.history.push("/")
        }
      })
      .catch(err => console.log(err)) 
    }
  }

  handleProfileUpdate() {
    console.log('====called====')
    this.handleInteraction()
  }

  handleInteraction() {
    const { clicked } = this.state
    
    let flip = clicked ? false : true
    this.setState({ clicked: flip })
  }
  delete() {
    axios.get('api/user/delete/:id'+this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
}
  
  render() {
    let { user, noMatch, newPassword, confNewPassword, clicked, rejected, edit, disabled } = this.state;
    if ( user === null ) return <p>Loading ...</p>;
    noMatch = newPassword !== confNewPassword ? true : false;
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-3">Welcome {user.username}</h1>
        </Jumbotron>
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
          <Col>
              { clicked ? 
                <Button onClick={this.handleProfileUpdate.bind(this)}>Submit Changes</Button> : 
                <Button onClick={this.handleInteraction.bind(this)}>Edit Profile</Button> }
          </Col>
          <Col></Col>
          <Col>
            <button type="button" onClick={this.handleLogout.bind(this)} className="btn btn-primary">Logout</button>
          </Col>
          <col>
          <button type="button" onClick={this.delete} className="btn btn-danger">Delete</button>
          </col>
        </Row>

        <br></br>
        <Row>
          <Col>
          { this.state.user.picture.length > 0 || !clicked ? 
            <Image className="w-50" src={this.state.user.picture[0]} rounded fluid />
            : <ImageUploader
              withIcon={true}
              buttonText='Choose Profile Image'
              onChange={this.onDrop.bind(this)}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={30000000}
            /> }
          </Col>
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
        </Row>
        <Row>
          <strong><label>Languages:</label></strong>
          { clicked ?
            <Col>
              <input 
                name="languages" 
                value={user.languages}
                onChange={this.handleInputChange}                
                onFocus={this.moveCaretAtEnd}
                type="text" 
              />
            </Col> :
            user.languages.map(lang => <Col><p>{lang}</p></Col>) 
          }
        </Row>
        <Row>
          <strong><label>Technologies:</label></strong>
          { clicked ?
            <Col>
              <input 
                name="technologies" 
                value={user.technologies}
                onChange={this.handleInputChange}                
                onFocus={this.moveCaretAtEnd}
                type="text" 
              />
            </Col> :
            user.technologies.map(tech => <Col><p>{tech}</p></Col>) 
          }          
        </Row>
        <Row>          
          <strong><label>Interests:</label></strong>
          { clicked ?
            <Col>
              <input 
                name="interests" 
                value={user.interests}
                onChange={this.handleInputChange}                
                onFocus={this.moveCaretAtEnd}
                type="text" 
              />
            </Col> :
            user.interests.map(interest => <Col><p>{interest}</p></Col>) 
          }
        </Row>
      </Container>
    )
  }
}