import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import parse from 'html-react-parser';

require("./index.css");

export class Jobs extends Component {
    constructor(props){
      super(props);
      this.state = {
        jobs: [],
        user: '',
        interest: 'python',
        title: '',
        location: '',
        url: ''

      }
    }
  
    componentDidMount = () => {
      this.getGitHubJobs();
    }
        
    // Get GitHubJobs API.
    getGitHubJobs = async () => {
      let interest = this.state.interest;
  
      const jobs = await axios.get(`https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?description=${interest}&location=us`,{crossDomain: true})
      console.log(jobs)

      this.setState({
        jobs: jobs.data
      })
    }
    componentDidMount(){}
    
    handleShare(e) {
    
     const user = require('../../User')
      
      const obj = this.state.jobs.data
      axios.post('api/share/add', obj )
          .then(res => console.log(res.data));
      
      this.setState({
        user: '',
        title: '',
        location: '',
        url: '',
      })
    }

    
  render() {
    return (
      <Container fluid  className="jobs">
        <div className="contents">
          <h3>Jobs</h3>
          <hr></hr>
          { this.state.jobs ? this.state.jobs.map( (job, index) => {
            return (
              <div key={ index }>

                <div className="job-title">
                  <h4>{ job.title }</h4>
                </div>

                <div className="job-content">
                  <p>Company: { job.company }  |  Location: { job.location }</p>
                </div>

                <div className="job-description">
                  <div>Description: { parse(job.description) }</div>
                </div>

                <a href={ job.url } target="_blank" rel="noopener noreferrer">Learn more...</a>

                <Link to="/share-page">
                  <button onClick={this.handleShare.bind(this)} className="btn" variant="info" >Share</button>
                </Link>
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
    
export default Jobs
    

    



    







































































































    

