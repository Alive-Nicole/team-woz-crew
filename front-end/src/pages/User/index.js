import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import Editable from '../../components/Editable';

require("./index.css");

export default class User extends Component {
  constructor(props) {
    super(props);
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
    this.onDrop.bind(this)
    this.handleLogout.bind(this)
    this.handleFormDisplay.bind(this)
    this.handlePasswordChange.bind(this)
  }

  componentDidMount() {
    axios.get("/api/user/profile")
      .then(payload => {
        console.log('====payload====', payload)
        this.setState({ user: payload.data })
      })
      .catch(err => console.log(err)) 
  }

  onDrop(picture) {
    this.setState({
        picture: this.state.user.picture.concat(picture),
    });
  }

  handleInputChange = event => {
    console.log('====event====', event.target.name, event.target.value)
    const { name, value } = event.target;
    if(name.includes("languages", "technologies", "interests")){
      const splitValue = value.split(",");
      this.setState({
        [name]: splitValue
      });  
    } else {
      console.log("shoientahsoe")
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
        console.log('====payload====', payload)
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

  handleInteraction() {
    const { clicked } = this.state
    
    let flip = clicked ? false : true
    this.setState({ clicked: flip })
  }

  render() {
    console.log('====this.state====', this.state.user ? this.state.user : "")
    let { user, noMatch, newPassword, confNewPassword, clicked, rejected, edit, disabled } = this.state;
    if ( user === null ) return <p>Loading ...</p>;
    noMatch = newPassword !== confNewPassword ? true : false;
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-3">Welcome {user.username}</h1>
        </Jumbotron>
        <Link to="/home">Home</Link>
        <Row>
          <Col>
            <ImageUploader
              withIcon={true}
              buttonText='Choose Profile Image'
              onChange={this.onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
            />
          </Col>
          <Col>
            <div>
              {clicked ?
                <div>
                  <label>First Name:</label>
                  <input 
                    name="firstName" 
                    value={user.firstName}
                    onChange={this.handleInputChange}                
                    onFocus={this.moveCaretAtEnd}
                    type="text" 
                  />
                </div> :
                <p onClick={this.handleInteraction.bind(this)}>{user.firstName}</p> 
              }
            </div>
          </Col>
          <Col>
            <div>
              {clicked ?
                <div>
                  <label>Last Name:</label>
                  <input 
                    name="lastName" 
                    value={user.lastName}
                    onChange={this.handleInputChange}                
                    onFocus={this.moveCaretAtEnd}
                    type="text" 
                  />
                </div> :
                <p onClick={this.handleInteraction.bind(this)}>{user.lastName}</p> 
              }
            </div>
          </Col>
        </Row>
        {/* <div className="card-header">{user.picture[0]}</div> */}
        <Row>
          <Col>
          <div>
              {clicked ?
                <div>
                  <label>Phone Number:</label>
                  <input 
                    name="phone" 
                    value={user.phone}
                    onChange={this.handleInputChange}                
                    onFocus={this.moveCaretAtEnd}
                    type="text" 
                  />
                </div> :
                <p onClick={this.handleInteraction.bind(this)}>{user.phone}</p> 
              }
            </div>
          </Col>
          <Col>
            <div>
              {clicked ?
                <div>
                  <label>Email:</label>
                  <input 
                    name="email" 
                    value={user.email}
                    onChange={this.handleInputChange}                
                    onFocus={this.moveCaretAtEnd}
                    type="text" 
                  />
                </div> :
                <p onClick={this.handleInteraction.bind(this)}>{user.email}</p> 
              }
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              {clicked ?
                <div>
                  <label>LinkedIn:</label>
                  <input 
                    name="linkedIn" 
                    value={user.linkedIn}
                    onChange={this.handleInputChange}                
                    onFocus={this.moveCaretAtEnd}
                    type="text" 
                  />
                </div> :
                <p onClick={this.handleInteraction.bind(this)}>{user.linkedIn}</p> 
              }
            </div>
          </Col>
          <Col>
            <div>
              {clicked ?
                <div>
                  <label>Github:</label>
                  <input 
                    name="github" 
                    value={user.github}
                    onChange={this.handleInputChange}                
                    onFocus={this.moveCaretAtEnd}
                    type="text" 
                  />
                </div> :
                <p onClick={this.handleInteraction.bind(this)}>{user.github}</p> 
              }
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            { clicked ?
              <div>
                <label>Languages:</label>
                <input 
                  name="languages" 
                  value={user.languages}
                  onChange={this.handleInputChange}                
                  onFocus={this.moveCaretAtEnd}
                  type="text" 
                />
              </div> :
              user.languages.map(lang => <p onClick={this.handleInteraction.bind(this)}>{lang}</p>) 
            }
          </Col>
        </Row>
        <Row>
          <Col>
            { clicked ?
              <div>
                <label>Technologies:</label>
                <input 
                  name="technologies" 
                  value={user.technologies}
                  onChange={this.handleInputChange}                
                  onFocus={this.moveCaretAtEnd}
                  type="text" 
                />
              </div> :
              user.technologies.map(tech => <p onClick={this.handleInteraction.bind(this)}>{tech}</p>) 
            }
          </Col>
        </Row>
        <Row>
          <Col>
            { clicked ?
              <div>
                <label>Interests:</label>
                <input 
                  name="interests" 
                  value={user.interests}
                  onChange={this.handleInputChange}                
                  onFocus={this.moveCaretAtEnd}
                  type="text" 
                />
              </div> :
              user.interests.map(interest => <p onClick={this.handleInteraction.bind(this)}>{interest}</p>) 
            }
          </Col>
        </Row>
        <hr className="my-4" />
        <div>
          {/* <p className="card-text">{user.phone}</p> */}
          {/* <p className="card-text">{user.email}</p>
          <p className="card-text">{user.linkedIn}</p>
          <p className="card-text">{user.gitHub}</p> */}
          {/* { user.languages.map(lang => <p>{lang}</p>) }
          { user.technologies.map(lang => <p>{lang}</p>) }
          { user.interests.map(lang => <p>{lang}</p>) } */}
          {/* <p className="card-text">{user.languages.length}</p> */}
          {/* <p className="card-text">{user.technologies.length}</p>
          <p className="card-text">{user.interests.length}</p> */}

          <hr className="my-4" />
          <button type="button" onClick={this.handleLogout.bind(this)} className="btn btn-primary">Logout</button>
          {edit ?
          <div>
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
              <button className="btn btn-primary" type="button" onClick={this.handlePasswordChange.bind(this)} className="btn btn-primary">Submit Change</button>
            </form>
            <button className="btn btn-primary" type="button" onClick={this.handleFormDisplay.bind(this)}>Hide</button>
          </div> : <div><button className="btn btn-primary" type="button" onClick={this.handleFormDisplay.bind(this)}>Change Password</button></div> }
        </div>
      </Container>
    )
  }
}