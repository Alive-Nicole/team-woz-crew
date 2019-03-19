import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import axios from 'axios';
// import parse from 'html-react-parser';

export class Jobs extends Component {
    constructor(props){
      super(props);
      this.state = {
        jobs: [],
        interest: 'python'
      }
    }
  
    componentDidMount = () => {
      this.getGitHubJobs();
    }
  
    componentDidUpdate = () => {
      this.getGitHubJobs();
    }
        
    // Get GitHubJobs API.
    getGitHubJobs = async () => {
      let interest = this.state.interest;
  
      const jobs = await axios.get(`https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?description=${interest}&location=us`,{crossDomain: true})
      //console.log(jobs)

      this.setState({
        jobs: jobs.data
      })
    }

    
  render() {
    return (
      <Container fluid  className="jobs">
        <div className="contents">
          { this.state.jobs ? this.state.jobs.map( (job, index) => {
            return (
              <div key={ index }>

                <div className="job-title">
                  <h4>{ job.title }</h4>
                </div>

                <div className="job-content">
                  <p>Company: { job.company }  |  Location: { job.location }</p>
                </div>

                <a href={ job.url } target="_blank" rel="noopener noreferrer">Learn more...</a>

                <Link to="/share-page">
                  <button className="btn" variant="info" >Share</button>
                </Link>

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
    

    



    







































































































    

