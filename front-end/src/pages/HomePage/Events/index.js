import React, { Component } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import parse from 'html-react-parser';
import axios from 'axios';

require("./index.css");

const Meetup_API = "2657185b242c4410412771346973716d";

export class Events extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: [],
      interest: 'python',
      displayedIndex: null,
      readMore: false
    }
  }
  
  componentDidMount = () => {
    this.getMeetup();
  }

  
  handleReadMore = index => {
    this.setState({ readMore: true, displayedIndex: index })    
  }

  handleCollapse = () => {
    this.setState({ readMore: false, displayedIndex: null })    
  }
  
  handleShareAction = ( index ) => {
    // const { events } = this.state
    // const event = events[ index ]
    // axios.post("/api/shared/add", { type: "event", payload: event })
    // pull data from state object
  }
  //Get Meetup API
  getMeetup = async () => {
    
    let interest = interest;
    const events = await axios.get(`https://cors-anywhere.herokuapp.com/api.meetup.com/find/groups?&zip=94544&text=programming&radius=10&key=${Meetup_API}`,{crossDomain: true})
    this.setState({
      events: events.data
    })
  }

  
  render() {
    const { events, displayedIndex, readMore } = this.state
    return (
      <Container fluid>

        <div className="contents">
          <h3>Events</h3>
          <hr></hr>
          { events ? events.map( (event, index) =>  {     
            let desc = event.description && typeof event.description === "string" ? parse(event.description) : "No description available";            
            return ( 
              <div key={ index }>

                <div className="event-title">
                  <h4>{ event.name }</h4>
                  <h5>{ event.localized_location }</h5>
                </div>
                <Row>
                  <Col>
                  { readMore ? <Button className="btn btn-outline-dark" onClick={ this.handleCollapse.bind(this)}>Collapse</Button> : 
                  <Button key={ index } variant="outline-dark" onClick={ this.handleReadMore.bind(this, index)}>
                      Read More
                    </Button> }                    
                  </Col>
                  <Col>
                    <a className="btn btn-outline-dark" href={ event.link } target="_blank" rel="noopener noreferrer">Go To Posting</a>
                  </Col>
                  <Col>
                    <Button className="btn" variant="dark" onClick={ this.handleShareAction.bind(this, index) }>Share</Button>
                  </Col>
                </Row>
                { displayedIndex === index ? 
                <Row>
                  <Col>
                    <Image src={ event.key_photo ? event.key_photo.photo_link : event.key_photo } />
                    <div className="event-description">
                      <div><h4><strong>Description:</strong></h4> { desc }</div>
                    </div>
                  </Col>
                </Row> : <div></div> }                
                <hr></hr>
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
