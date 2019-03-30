import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Container, Row, Col } from 'react-bootstrap';
import NewsFeeds from '../NewsFeeds';
import Jobs from '../Jobs';
import Events from '../Events';

require('./index.css');

class Home extends Component {
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