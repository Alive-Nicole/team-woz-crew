import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
      
  // Get API for Jobs.
  getGitHubJobs = () => async () => {
    let interest = this.state.interest;
    await axios.get(`https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?description=${interest}&location=us`,{crossDomain: true})
    .then(data => {

      console.log(data); //Nothing displays in the console

      data.map(post => {
        let jobs = this.state.jobs;

          let fetchedJobs = {
            id: post.id,
            title: post.title,
            type: post.type,
            company: post.company,
            url: post.url,
            location: post.location
          }

          jobs.push(fetchedJobs);
          // console.log(events)
      })
    }).catch(err =>{
      console.log(err);
    })

    console.log(this.state.jobs);
  }

    
  render() {
    return (
      <div  className="jobs">
        <div>
          <h3 align="center">Jobs</h3>
          Content
        </div>
      </div>
    )
  }
}
    
    export default Jobs
    

    



    







































































































    

