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
        <Row>
          <Col>
            <NewsFeeds />
          </Col>
          <Col>
            <Jobs />
          </Col>
          <Col>
            <Events />
          </Col>
        </Row>
      </Container>
    );
  }    
}

export default Home;