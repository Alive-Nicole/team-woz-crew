import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Button} from 'react-bootstrap';


 

export class Jobs extends Component {
    constructor(props){
        super(props);
        //this.getGithubJobs();
    }
    
    // getGithubJobs = () => {
    //    let interest = "remote";
    //    let state = "";
    
    //    fetch(`https://jobs.github.com/positions.json?description=${interest}&location=`, {mode: 'cors'})
    //    .then((data) => {
    //        console.log(data[0]);
    //    })

    // }

    


  render() {
    return (
      <div  className="jobs">
        <div>
          <h3 align="center">Jobs</h3>
          <div className="contents">

            <div className="content1">
              <h5>Job 1</h5>
              <div className="description">
                Debating me breeding be answered an he. Spoil event was words her off cause any. Tears woman which no is world miles woody. Wished be do mutual except in effect answer. Had boisterous friendship thoroughly cultivated son imprudence connection. Windows because concern sex its. Law allow saved views hills day ten. Examine waiting his evening day passage proceed.
              </div>
              <a href="/url-of-post" _target="blank">Read more...</a>
              <Link to="/share">
                <Button variant="info" >Share</Button>
              </Link>
            </div>

            <div className="content2">
              <h5>Job 2</h5>
              <div className="description">
                Debating me breeding be answered an he. Spoil event was words her off cause any. Tears woman which no is world miles woody. Wished be do mutual except in effect answer. Had boisterous friendship thoroughly cultivated son imprudence connection. Windows because concern sex its. Law allow saved views hills day ten. Examine waiting his evening day passage proceed.
              </div>
              <a href="/url-of-post" _target="blank">Read more...</a>
              <Link to="/share">
                <Button variant="info">Share</Button>
              </Link>
            </div>

            <div className="content3">
              <h5>Job 3</h5>
              <div className="description">
                Debating me breeding be answered an he. Spoil event was words her off cause any. Tears woman which no is world miles woody. Wished be do mutual except in effect answer. Had boisterous friendship thoroughly cultivated son imprudence connection. Windows because concern sex its. Law allow saved views hills day ten. Examine waiting his evening day passage proceed.
              </div>
              <a href="/url-of-post" _target="blank">Read more...</a>
              <Link to="/share">
                <Button variant="info">Share</Button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
