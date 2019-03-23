import React, { Component } from 'react';
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
<<<<<<< HEAD
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
=======
//import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import { Container } from 'react-bootstrap';
>>>>>>> Added Event header
import NewsFeeds from '../NewsFeeds';
import Jobs from '../Jobs';
import Events from '../Events';

require('./index.css');


class Home extends Component {

  // <React.Fragment>
  //   <MDBModalHeader >
  //     <h5 id="top"></h5>
  //     <a href="#news">News</a>
  //     <a href="#jobs">Jobs</a>
  //     <a href="#events">Events</a>
  //   </MDBModalHeader>
    
  //   <MDBContainer>
  //       <MDBRow className='news'>
  //         <h2 id="news" className="text-uppercase my-3">News Feeds</h2>
  //         <a href="#top">Top</a> <br></br>
  //       </MDBRow>

  //       <MDBRow className='jobs'>
  //         <a href="#top">Top</a>
  //         <h2 id="jobs" className="text-uppercase my-3">Jobs</h2>
  //       </MDBRow>

  //       <MDBRow className='events'>
  //         <h2 id="events" className="text-uppercase my-3">Events</h2>
  //         <a href="#top">Top</a>            
  //       </MDBRow> 
  //   </MDBContainer>
  // </React.Fragment>
  render() {
    
    return(
      <Container fluid={true}>
        <Row className="flex-center">
        <Tabs className="tabs" defaultActiveKey="news-feed" transition={false} id="noanim-tab-example">
          <Tab eventKey="news-feed" title="News-Feed">            
              <NewsFeeds />
          </Tab>
          <Tab eventKey="jobs" title="Jobs">            
              <Jobs />
          </Tab>
          <Tab eventKey="events" title="Events">            
              <Events />
          </Tab>
        </Tabs>
        </Row>
      </Container>
    );
  }    
}

export default Home;