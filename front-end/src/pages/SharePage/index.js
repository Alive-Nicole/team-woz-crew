import React, { Component } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
require('./index.css');

export class SharePage extends Component {
    state = {
      news: [],
      jobs: [],
      events: []
    }

    componentDidMount(){
      this.getSharedData();
    }
    componentWillMount(){
      this.getSharedData();
    }

    // Get data from backend
    getSharedData = () =>{
      axios.get('/api/share/add')
      .then(response => {
        let res = response.config.data;
        console.log(res);
        // If statement to verify the type of post shared
        if(res.type == "article"){
          console.log("You are sharing a News feed");      
          let { news } = this.state;
          // news.push({
          //   type: res.type,
          //   article: res.payload
          // });
          this.setState({
            news: {
              type: res.type,
              article: res.payload,
              like: false,
              dislike: false,
              foundUseful: 0
            }
          })
        }
        else if(res.type == "job"){
          console.log("You are sharing a job")
          let { jobs } = this.state;
          // jobs.push({
          //   type: res.type,
          //   job: res.payload
          // });

          this.setState({
            jobs: {
              type: res.type,
              job: res.payload,
              like: false,
              dislike: false,
              foundUseful: 0
            }
          })
        }
        else if(res.type == "event"){
          console.log("You are sharing an event")
          let { events } = this.state;
          // events.push({
          //   type: res.type,
          //   event: res.payload
          // });

          this.setState({
            events: {
              type: res.type,
              event: res.payload,
              like: false,
              dislike: false,
              foundUseful: 0
            }
          })
        }
        else {
          console.log('Unknown type')
        }
      })
      .catch(err => {
        console.log(err)
      })
    }

    // Like | Dislike a post
    markUseful = (e) =>{      
      let share = this.state;
      let id = e.target.value;
      let newsFeed = share.news
      let jobsFeed = share.jobs
      let eventsFeed = share.events
      // If statement to find type
      if(share.news){
        this.setState({
          news: newsFeed.map(post => {
            if(id == post.article.url){
              if(post.like == false && post.dislike == false) {
                post.foundUseful++;
                post.like = true;
              }
              else if((post.like == true && post.dislike == true) || (post.like == false && post.dislike == true)){
                post.foundUseful++;
                post.like = true;
                post.dislike = false;
              }
              else if(post.like == true && post.dislike == false){
                post.foundUseful--;
                post.like = false;
              }
            }
            return newsFeed;
          })
        })
      }
      else if(share.jobs){
        this.setState({
          jobs: jobsFeed.map(post => {
            if(id == post.job.url){
              if(post.like == false && post.dislike == false) {
                post.foundUseful++;
                post.like = true;
              }
              else if((post.like == true && post.dislike == true) || (post.like == false && post.dislike == true)){
                post.foundUseful++;
                post.like = true;
                post.dislike = false;
              }
              else if(post.like == true && post.dislike == false){
                post.foundUseful--;
                post.like = false;
              }
            }
            return jobsFeed;
          })
        })
      }
      else if(share.events){
        this.setState({
          events: eventsFeed.map(post => {
            if(id == post.event.link){
              if(post.like == false && post.dislike == false) {
                post.foundUseful++;
                post.like = true;
              }
              else if((post.like == true && post.dislike == true) || (post.like == false && post.dislike == true)){
                post.foundUseful++;
                post.like = true;
                post.dislike = false;
              }
              else if(post.like == true && post.dislike == false){
                post.foundUseful--;
                post.like = false;
              }
            }
            return eventsFeed;
          })
        })
      }
    }

    markNotUseful = (e) =>{
      let share = this.state;
      let id = e.target.value;
      let newsFeed = share.news
      let jobsFeed = share.jobs
      let eventsFeed = share.events
      // If statement to find type
      if(share.news){
        this.setState({
          news: newsFeed.map(post => {
            if(id == post.article.url){
              if(post.like == false && post.dislike == false) {
                post.foundUseful--;
                post.dislike = true;
              }
              else if((post.like == true && post.dislike == true) || (post.like == true && post.dislike == false)){
                post.foundUseful--;
                post.like = false;
                post.dislike = true;
              }
              else if(post.like == false && post.dislike == true){
                post.foundUseful++;
                post.dislike = false;
              }
            }
            return newsFeed;
          })
        })
      }
      else if(share.jobs){
        this.setState({
          jobs: jobsFeed.map(post => {
            if(id == post.job.url){
              if(post.like == false && post.dislike == false) {
                post.foundUseful--;
                post.dislike = true;
              }
              else if((post.like == true && post.dislike == true) || (post.like == true && post.dislike == false)){
                post.foundUseful--;
                post.like = false;
                post.dislike = true;
              }
              else if(post.like == false && post.dislike == true){
                post.foundUseful++;
                post.dislike = false;
              }
            }
            return jobsFeed;
          })
        })
      }
      else if(share.events){
        this.setState({
          events: eventsFeed.map(post => {
            if(id == post.event.link){
              if(post.like == false && post.dislike == false) {
                post.foundUseful--;
                post.dislike = true;
              }
              else if((post.like == true && post.dislike == true) || (post.like == true && post.dislike == false)){
                post.foundUseful--;
                post.like = false;
                post.dislike = true;
              }
              else if(post.like == false && post.dislike == true){
                post.foundUseful++;
                post.dislike = false;
              }
            }
            return eventsFeed;
          })
        })
      }
    }

    render() {
      const { news, events, jobs } = this.state
      console.log(`====Data[0]==== ${news[0]}, ${events[0]}, ${jobs[0]}`)
      return (
        <Container fluid className="shared">        
          <h3>Shared items</h3>
          <hr></hr>
          {/* If sharing an article */}
          { news ? news.map( (article, index) => {
            return (
              <div key={index} >
                <p>"Profile pic"</p>
                <p>(#username) shared an {article.type}</p>
                <a href={ article.article.url } target="_blank"><p className="content">{ article.article.title }</p></a>
                <div>
                  <Button value={article.article.url} onClick={this.markUseful}>Like</Button>
                  <Button value={article.article.url} onClick={this.markNotUseful}>Dislike</Button>
                  <div className="useful">
                    {article.foundUseful} found this useful.
                  </div>
                </div>
                <hr></hr>
              </div>              
            )
          }) : <div>
            {/* If sharing an event */}
            { events ? events.map( (event, index) => {
              return (
                <div key={index}>
                  <p>"Profile pic"</p>
                  <p>(#username) shared an {event.type}</p>
                  <a href={ event.event.link } target="_blank"><p className="content">{ event.event.name }</p></a>
                  <small>{event.event.localized_location}</small>
                  <div>
                    <Button value={event.event.link} onClick={this.markUseful}>Like</Button>
                    <Button value={event.event.link} onClick={this.markNotUseful}>Dislike</Button>
                    <div className="useful">
                      {event.foundUseful} found this useful.
                    </div>
                  </div>
                  <hr></hr>
                </div>
              )
            }): <div>
              {/* If sharing a job */}
            { jobs ? jobs.map( (job, index) => {
              return (
                <div key={index}>
                  <p>"Profile pic"</p>
                  <p>(#username) shared an {job.type}</p>
                  <a href={ job.job.url } target="_blank"><p className="content">{ job.job.title }</p></a>
                  <small>Company: { job.job.company }  |  Location: { job.job.location }</small>
                  <div>
                    <Button value={job.job.url} onClick={this.markUseful}>Like</Button>
                    <Button value={job.job.url} onClick={this.markNotUseful}>Dislike</Button>
                    <div className="useful">
                      {job.foundUseful} found this useful.
                    </div>
                  </div>
                  <hr></hr>
                </div>
              )
            }): <div></div>
          }
            </div>
          }
            </div> 
          }
        </Container>
        )
      }
    }
    
  export default SharePage;


    {/* <Row className="row1">
      {/* <Col  xs={6}>
        <Image src={shared.displayPicture} alt="profile-picture" rounded width="80px" height="50px"/>
      </Col> */}
      {/* <Col>
        <p className="username">{shared.username} shared.</p>
        
      </Col> }
      
    </Row> */}
{/*           
    <Row className="row2">
      <a className="shared-post" href={shared.url} target="_blank" rel="noopener noreferrer">
        <h5 className="title">{shared.title}</h5>
        <p className="description">{shared.description}</p>
      </a>
    </Row> */}

    {/* <div className="row3">
      <Button value={shared.url} onClick={this.markfoundUseful}>
        Like
      </Button>
      <Button value={shared.id} onClick={this.markNotUseful}>
        Dislike
      </Button>
      <div className="useful">
        {shared.foundUseful} found this useful.
      </div>
    </div> */}