import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import { Container, Row, Col, Button, Jumbotron, Image } from 'react-bootstrap';
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import axios from 'axios';
import parse from 'html-react-parser';


const Meetup_API = "2657185b242c4410412771346973716d";

export class Events extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: '',
      interest: 'python'
    }
  }

  componentDidMount = () => {
    this.getMeetup();
    this.sharePost();
  }

  componentDidUpdate = () => {
    this.getMeetup();
    this.sharePost();
  }
 

  //Get Meetup API
  getMeetup = async () => {
    let interest = this.state.interest;
    const events = await axios.get(`https://cors-anywhere.herokuapp.com/api.meetup.com/2/concierge?&sign=true&photo-host=public&zip=&country=&city=&state=&fields=${interest}&key=${Meetup_API}`,{crossDomain: true})
    
    this.setState({
      events: events.data.results
    })
    
      //     id: post.id,
      //     title: post.name,
      //     description: post.description,
      //     url: post.event_url,
      //     // city: post.venue.city,
      //     // country: post.venue.country
  }

  sharePost = (e) => {
    let postID = e.target.value;
    console.log(postID)

    this.state.events.map((events, i) => {
      
    })
    // const getPost = axios.get('')
    // axios.post('/share-page', {
      
    //   return (
    //     <
    //   )
    // })
  }

  
  render() {
    return (
      <MDBContainer fluid>

        <MDBRow className="contents">
          { this.state.events ? this.state.events.map( (event, index) =>  {     
            const desc = event.decription ? parse(event.decription).subString(0, 30) : "No description available";
            
            return ( 
              <div key={ index }>

                <div className="event-title">
                  <h4>{ event.name }</h4>
                </div>

                <div className="event-content">
                  <p> { desc } </p>
                </div>

                <a href={ event.event_url } target="_blank" rel="noopener noreferrer">Read more...</a>

                <Link to="/share-page">
                  <button onClick={this.sharePost} className="btn" variant="info" value={ index } >Share</button>
                </Link>
                
              </div>
            )
          }) : <div><br></br><h4 className="center">Loading...</h4><br></br></div>
        }

        </MDBRow>
      </MDBContainer>
    )
  }
}

export default Events
