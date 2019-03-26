import React, { Component } from 'react';
import {Grid, Row, Col, Image, Button, Container} from 'react-bootstrap';
import Axios from 'axios';
require('./index.css');

export class SharePage extends Component {
    state = {
      share: [],
      like: false,
      dislike: false,
      foundUseful: 0
    }

    fetchData = () =>{
      let result = Axios.get('')
    }

    // markfoundUseful = (e) =>{      
    //   let { share } = this.state;
    //   let id = e.target.value;

    //   this.setState({
    //     share: share.map(post => {
    //       if(post.id == id){
    //         if(post.useful == false && post.notUseful == false) {
    //           post.foundUseful++;
    //           post.useful = true;
    //         }
    //         else if((post.useful == true && post.notUseful == true) || (post.useful == false && post.notUseful == true)){
    //           post.foundUseful++;
    //           post.useful = true;
    //           post.notUseful = false;
    //         }
    //         else if(post.useful == true && post.notUseful == false){
    //           post.foundUseful--;
    //           post.useful = false;
    //         }
    //       }
    //       return post;
    //     })
    //   })
    // }

    // markNotUseful = (e) =>{
    //   let share = this.state.share;
    //   let id = e.target.value;

    //   this.setState({
    //     share: share.map(post => {
    //       if(post.id == id){
    //         if(post.notUseful == false && post.useful == false) {
    //           post.foundUseful--;
    //           post.notUseful = true;
    //         }
    //         else if((post.notUseful == true && post.useful == true) || (post.notUseful == false && post.useful == true)){
    //           post.foundUseful--;
    //           post.notUseful = true;
    //           post.useful = false;
    //         }
    //         else if(post.notUseful == true && post.useful == false){
    //           post.foundUseful++;
    //           post.notUseful = false;
    //         }
    //       }
    //       return post;
    //     })
    //   })
    // }


    render() {
     // return this.state.share.map(shared => (
        
        <Container className="sharePost">

          <h1>Shared items</h1>
          {/* <Row className="row1">
            {/* <Col  xs={6}>
              <Image src={shared.displayPicture} alt="profile-picture" rounded width="80px" height="50px"/>
            </Col> */}
            {/* <Col>
              <p className="username">{shared.username} shared.</p>
              
            </Col> }
            
          </Row> */}
{/*           
          <Row className="row2">
            <a className="shared-post" href={shared.url} target="_blank" rel="noopener noreferrer">
              <h5 className="title">{shared.title}</h5>
              <p className="description">{shared.description}</p>
            </a>
          </Row> */}

          {/* <div className="row3">
            <Button value={shared.url} onClick={this.markfoundUseful}>
              Like
            </Button>
            <Button value={shared.id} onClick={this.markNotUseful}>
              Dislike
            </Button>
            <div className="useful">
              {shared.foundUseful} found this useful.
            </div>
          </div> */}

        </Container>
      //))
    }
}

export default SharePage;