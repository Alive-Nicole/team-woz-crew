import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

require("./index.css");

export default class NewUser extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: {
        username: "",
        password: "",
        retypedPassword: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        github: "",
        linkedIn: "",
        languages:"",
        technologies:"",
        interests:"",
        picture:"",
        noMatch: false,
        rejected: false
      }
    }

    this.onDrop = this.onDrop.bind(this);
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

  
  handleSubmit( event ) {
    event.preventDefault();
    axios.post('/api/auth/signup', this.state.user)
    .then(payload => {
      if(payload.data.message === "Success!"){        
        this.props.history.push('/', { loggedIn: false });
      }
    })
    .catch(err => {
      if( err.response.status === 401 || err.response.status === 400 ) {
        this.setState({ rejected: true });
      }
    });
  }

  render() {
    let { rejected, noMatch, password, retypedPassword, disabled } = this.state.user
    noMatch = password !== retypedPassword ? true : false;

    return (
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col><h1 className="text-center">Sign-Up To Join The Dev Companions!</h1></Col>
        </Row>
        <hr></hr>
        <br></br>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col className="center">
            <Image 
              className="w-100 profile" 
              src={this.state.user.picture} 
              alt="https://via.placeholder.com/300/09f/fff.png" 
              rounded
              fluid
              />
            <br></br>
            <input name="foo" type="file" onChange={this.onDrop.bind(this)} />
            <br></br>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <Form className="signup-form" onSubmit={this.handleSubmit.bind(this)}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" name="username" onChange={this.handleInputChange.bind(this)} placeholder="johnSmith" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" onChange={this.handleInputChange.bind(this)} placeholder="Password123" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridRetypePassword">
                  <Form.Label>RetypePassword</Form.Label>
                  <Form.Control type="password" name="retypedPassword" onChange={this.handleInputChange.bind(this)} placeholder="Retype Password" />
                  { noMatch ? 
                    <Form.Text className="text-muted">
                      Passwords Do Not Match!
                  </Form.Text> : <div></div> }
                </Form.Group>
              </Form.Row>
              
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="firstName" onChange={this.handleInputChange.bind(this)} placeholder="e.g. John" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lastName" onChange={this.handleInputChange.bind(this)} placeholder="e.g. Smith" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPhoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" name="phone" onChange={this.handleInputChange.bind(this)} placeholder="(555) 555-5555" />
                </Form.Group>
              </Form.Row>
              
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="email" onChange={this.handleInputChange.bind(this)} placeholder="https://someemail@somewhere.here" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridGithub">
                  <Form.Label>Github</Form.Label>
                  <Form.Control type="text" name="github" onChange={this.handleInputChange.bind(this)} placeholder="https://github.com/username" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLinkedIn">
                  <Form.Label>LinkedIn</Form.Label>
                  <Form.Control type="text" name="linkedIn" onChange={this.handleInputChange.bind(this)} placeholder="https://www.linkedin.com/in/username/" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridLanguages">
                  <Form.Label>Languages</Form.Label>
                  <Form.Control type="text" name="languages" onChange={this.handleInputChange.bind(this)} placeholder="Java, C++, HTML" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridTechnologies">
                  <Form.Label>Technologies</Form.Label>
                  <Form.Control type="text" name="technologies" onChange={this.handleInputChange.bind(this)} placeholder="React, Angular, SQL" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridInterests">
                  <Form.Label>Interests</Form.Label>
                  <Form.Control type="text" name="interests" onChange={this.handleInputChange.bind(this)} placeholder="Hackathons, Basketball, Quidditch" />
                </Form.Group>
              </Form.Row>

              { rejected ? <div><small>Username Exists, Please Choose Another</small><br></br></div> : <div></div> }

              <Button variant="dark" size="lg" type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
 
  }
}