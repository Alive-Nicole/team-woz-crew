import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Button, Jumbotron, Image } from 'react-bootstrap';
import axios from 'axios';
import parse from 'html-react-parser';


const Meetup_API = "2657185b242c4410412771346973716d";
require("./index.css");
//const Meetup_API = "2657185b242c4410412771346973716d";

export class Events extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: [],
      interest: 'python'
    }
  }

  componentDidMount = () => {
    this.getMeetup();
  }

  //Get Meetup API
  getMeetup = async () => {
    let interest = this.state.interest;
    const events = await axios.get(`https://cors-anywhere.herokuapp.com/api.meetup.com/2/concierge?&sign=true&photo-host=public&zip=&country=&city=&state=&fields=${interest}&key=${Meetup_API}`,{crossDomain: true})
    console.log('====events====', events)
    
    this.setState({
      events: events.data.results
    })
  }

  
  render() {
    return (
      <Container fluid>

        <div className="contents">
          <h3>Events</h3>
          <hr></hr>
          { this.state.events ? this.state.events.map( (event, index) =>  {     
            const desc = event.decription ? parse(event.decription).slice(0, 30) : "No description available";
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
                  <button className="btn" variant="info" >Share</button>
                </Link>
                
              </div>
            )
          }) : <div><br></br><h4 className="center">Loading...</h4><br></br></div>
        }

        </div>
      </Container>
    )
  }
}

export default Events
