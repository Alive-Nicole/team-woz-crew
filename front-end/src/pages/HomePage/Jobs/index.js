import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export class Jobs extends Component {
    constructor(props){
        super(props);
        this.state = {
          jobs: null,
        }
       
    }

    // Get API for Jobs.
   async getJobs(){
    //  
    













































































































    

     let jobs = [];
     let getJson = await axios.get('api-url').then(res => {
       console.log("successful");
     }).catch(error =>{
       console.log("Failed: ", error);
     });

     getJson.forEach(data => {
       jobs.push({
         id: 'data.Id',
         title: 'data.title',
         description: 'data.content',
         url: 'data.url',
      
       })  
     })
     this.setState({jobs: jobs});
   }

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
              <Link to="/share-page">
                <button className="btn" variant="info" >Share</button>
              </Link>
            </div>

            <div className="content2">
              <h5>Job 2</h5>
              <div className="description">
                Debating me breeding be answered an he. Spoil event was words her off cause any. Tears woman which no is world miles woody. Wished be do mutual except in effect answer. Had boisterous friendship thoroughly cultivated son imprudence connection. Windows because concern sex its. Law allow saved views hills day ten. Examine waiting his evening day passage proceed.
              </div>
              <a href="/url-of-post" _target="blank">Read more...</a>
              <Link to="/share-page">
                <button className="btn" variant="info">Share</button>
              </Link>
            </div>

            <div className="content3">
              <h5>Job 3</h5>
              <div className="description">
                Debating me breeding be answered an he. Spoil event was words her off cause any. Tears woman which no is world miles woody. Wished be do mutual except in effect answer. Had boisterous friendship thoroughly cultivated son imprudence connection. Windows because concern sex its. Law allow saved views hills day ten. Examine waiting his evening day passage proceed.
              </div>
              <a href="/url-of-post" _target="blank">Read more...</a>
              <Link to="/share-page">
                <button className="btn" variant="info">Share</button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
