import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Meetup_API = "2657185b242c4410412771346973716d";

export class Events extends Component {
  state = {
    jobs: [{
      id: undefined,
      title: undefined,
      description: undefined,
      url: undefined,
      // state: undefined,
      // country: undefined,
    }]
  }

  // // Get API for Events.
  // async getEvents(){
  //   let events = [];
  //   let getJson = await axios.get('api-url').then(res => {
  //     console.log("successful");
  //   }).catch(error =>{
  //     console.log("Failed: ", error);
  //   });

  //   getJson.forEach(data => {
  //     events.push({
  //       id: 'data.Id',
  //       title: 'data.title',
  //       description: 'data.description',
  //       url: 'data.url',
  //       state: 'data.state',
  //       country: 'data.country'
  //     })  
  //   })

  //   this.setState({events: events})
  // }

  componentDidMount = () => {
    this.getMeetup();
  }
 

  //Get Meetup API
   getMeetup = async () => {
     await axios.get(`https://cors-anywhere.herokuapp.com/api.meetup.com/2/concierge?&sign=true&photo-host=public&zip=30296&country=US&city=Riverdale&state=GA&fields=technology&key=${Meetup_API}`,{crossDomain: true})
    //  .then(data => data.json())
     .then(data => {
        const jobs = data.data.results.map(post => {
          console.log(post.venue)

          this.setState({
            id: post.id,
            title: post.name,
            description: post.description,
            url: post.event_url,
            // city: post.venue.city,
            // country: post.venue.country 
          })
        })
     }).catch(err =>{
      console.log(err);
     })
   }

  
  render() {

    return (
      <div  className="events">
        <div>
          <h3 align="center">Events</h3>
          <div className="contents">

            <div className="content1">
              <h5>Event 1</h5>
              <div className="description">
                {this.state.title}
                {this.state.description}
              </div>
              <a href="/url-of-post" _target="blank" rel="noopener noreferrer">Read more...</a>
              <Link to="/share-page">
                <button className="btn" variant="info" >Share</button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Events
