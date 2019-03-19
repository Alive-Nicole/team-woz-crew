import React, { Component } from 'react';
import {Grid, Row, Col, Image, Button, Container} from 'react-bootstrap';
require('./index.css');

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
          useful: false,
          notUseful: false,
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
          useful: false,
          notUseful: false,
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
          useful: false,
          notUseful: false,
          message: "I enjoyed reading this."
        }
      ]
    }

    markfoundUseful = (e) =>{      
      let share = this.state.share;
      let id = e.target.value;

      this.setState({
        share: share.map(post => {
          if(post.id == id){
            if(post.useful == false && post.notUseful == false) {
              post.foundUseful++;
              post.useful = true;
            }
            else if((post.useful == true && post.notUseful == true) || (post.useful == false && post.notUseful == true)){
              post.foundUseful++;
              post.useful = true;
              post.notUseful = false;
            }
            else if(post.useful == true && post.notUseful == false){
              post.foundUseful--;
              post.useful = false;
            }
          }
          return post;
        })
      })
    }

    markNotUseful = (e) =>{
      let share = this.state.share;
      let id = e.target.value;

      this.setState({
        share: share.map(post => {
          if(post.id == id){
            if(post.notUseful == false && post.useful == false) {
              post.foundUseful--;
              post.notUseful = true;
            }
            else if((post.notUseful == true && post.useful == true) || (post.notUseful == false && post.useful == true)){
              post.foundUseful--;
              post.notUseful = true;
              post.useful = false;
            }
            else if(post.notUseful == true && post.useful == false){
              post.foundUseful++;
              post.notUseful = false;
            }
          }
          return post;
        })
      })
    }


    render() {
      return this.state.share.map(shared => (
        
        <Container key={shared.id} className="sharePost">
          

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
            <a className="shared-post" href={shared.url} target="_blank" rel="noopener noreferrer">
              <h5 className="title">{shared.title}</h5>
              <p className="description">{shared.description}</p>
            </a>
          </div>

          <div className="row3">
            <Button value={shared.id} onClick={this.markfoundUseful}>
              Like
            </Button>
            <Button value={shared.id} onClick={this.markNotUseful}>
              Dislike
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
