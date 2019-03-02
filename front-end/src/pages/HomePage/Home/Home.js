import React, { Component } from 'react';
import NewsFeeds from '../NewsFeeds/NewsFeeds';
import Jobs from '../Jobs/Jobs';
import Events from '../Events/Events';
import './Home.css';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Button, Container} from 'react-bootstrap';


// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'

class Home extends Component {

  render() {
    
    return(
      <div className='home'>
        <div className = "">
            <div className='news'>
                <NewsFeeds />
            </div>

            <div className='jobs'>
                <Jobs/>
            </div>

            <div className='events'>
                <Events />
            </div> 
        </div>
      </div>
    );
  }    
}

export default Home;