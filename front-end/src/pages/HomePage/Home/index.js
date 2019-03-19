import React, { Component } from 'react';
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import NewsFeeds from '../NewsFeeds';
import Jobs from '../Jobs';
import Events from '../Events';
import {Link} from 'react-router-dom';

require('./index.css');


class Home extends Component {

  render() {
    
    return(
      <React.Fragment>
        <MDBModalHeader >
          <h5 id="top"></h5>
          <a href="#news">News</a>
          <a href="#jobs">Jobs</a>
          <a href="#events">Events</a>
        </MDBModalHeader>
        
        <MDBContainer>
            <MDBRow className='news'>
              <h2 id="news" className="text-uppercase my-3">News Feeds</h2>
              <a href="#top">Top</a> <br></br>
              <NewsFeeds />
            </MDBRow>

            <MDBRow className='jobs'>
              <h2 id="jobs" className="text-uppercase my-3">Jobs</h2>
              <a href="#top">Top</a>
              <Jobs />
            </MDBRow>

            <MDBRow className='events'>
              <h2 id="events" className="text-uppercase my-3">Events</h2>
              <a href="#top">Top</a>            
              <Events />
            </MDBRow> 
        </MDBContainer>
      </React.Fragment>
    );
  }    
}

export default Home;