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
  state = {
    feeds: [
      {
        id: 1,
        url: "url-of source",
        title: "Feed 1",
        description: "Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite do if.",
        location: "US",
        interest: "C#"
      },
      {
        id: 2,
        url: "url-of source",
        title: "Feed 2",
        description: "Debating me breeding be answered an he. Spoil event was words her off cause any. Tears woman which no is world miles woody. Wished be do mutual except in effect answer. Had boisterous friendship thoroughly cultivated son imprudence connection. Windows because concern sex its. Law allow saved views hills day ten. Examine waiting his evening day passage proceed.",
        location: "US",
        interest: "Python"
      },
      {
        id: 3,
        url: "url-of source",
        title: "Feed 3",
        description: "Sing long her way size. Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited. Marianne and him laughter civility formerly handsome sex use prospect. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but.",
        location: "US",
        interest: "React"
      }
    ]
  }

  render() {
    
    return(
      <div className='home'>
        <div className = "">
            <div className='news'>
                <NewsFeeds news={this.state.feeds} />
            </div>

            <div className='jobs'>
                <Jobs jobs={this.state.feeds} />
            </div>

            <div className='events'>
                <Events events={this.state.feeds} />
            </div> 
        </div>
      </div>
    );
  }    
}

export default Home;