import React, { Component } from 'react';
import {Grid, Row, Col, Image, Button, Container} from 'react-bootstrap';
import NavBar from '../../components/NavBar/index';
require('./Share.css');

export class SharePage extends Component {
    state = {
      share: [
        {
          id: 1,
          displayPicture: 'https://i.pinimg.com/236x/40/18/03/401803755170c9750ab19646a064f534.jpg',
          username: 'Nicole',
          title: 'Title',
          description: 'description',
          url: 'url',
          foundUseful: 0,
          message: "I enjoyed reading this."
        },
        { 
          id: 2,
          displayPicture: 'https://i.pinimg.com/236x/40/18/03/401803755170c9750ab19646a064f534.jpg',
          username: 'Nicole',
          title: 'Title',
          description: 'description',
          url: 'url',
          foundUseful: 0,
          message: "I enjoyed reading this."
        },
        {
          id: 3,
          displayPicture: 'https://i.pinimg.com/236x/40/18/03/401803755170c9750ab19646a064f534.jpg',
          username: 'Nicole',
          title: 'Title',
          description: 'description',
          url: 'url',
          foundUseful: 0,
          message: "I enjoyed reading this."
        }
      ]
    }

    markfoundUseful = (e) =>{
      
      let share = this.state.share;
      let id = e.target.value;

      this.setState({
        share: share.map(post => {
          if(post.id == id) {
            post.foundUseful++// = useful;
          }
          
          return post;
        })
          
      })
      
      // console.log(foundUseful)
      
    }

    markNotUseful = (foundUseful) =>{
      foundUseful = this.state.share.foundUseful;

      if(true) {
        foundUseful -= 1
      }

      this.setState([{
        foundUseful: foundUseful
      }])
    }


    render() {
      return this.state.share.map(shared => (
        
        <Container key={shared.id} className="sharePost">
          <NavBar />

          <Row className="row1">
            <Col  xs={6}>
              <Image src={shared.displayPicture} alt="profile-picture" rounded width="80px" height="50px"/>
            </Col>
            <Col>
              <p className="username">{shared.username} shared.</p>
              <p className="message">
                {shared.message}
              </p>
            </Col>
            
          </Row>
          
          <div className="row2">
            <a className="shared-post" href={shared.url} target="_blank">
              <h5 className="title">{shared.title}</h5>
              <p className="description">{shared.description}</p>
            </a>
          </div>

          <div className="row3">
            <Button value={shared.id} onClick={this.markfoundUseful}>
              Useful
            </Button>
            <Button value={shared.id} onClick={this.markNotUseful}>
              Not Useful
            </Button>
            <div className="useful">
              {shared.foundUseful} found this useful.
            </div>
          </div>

        </Container>
      ))
    }
}

export default SharePage;
