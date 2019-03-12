import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Meetup_API = "2657185b242c4410412771346973716d";

export class Events extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: []
    }
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

  componentDidUpdate = () => {
    this.getMeetup();
  }
 

  //Get Meetup API
  getMeetup = async () => {
    let interest = 'python';
    await axios.get(`https://cors-anywhere.herokuapp.com/api.meetup.com/2/concierge?&sign=true&photo-host=public&zip=&country=&city=&state=&fields=${interest}&key=${Meetup_API}`,{crossDomain: true})
    .then(data => {
        
      data.data.results.map(post => {
        let events = this.state.events;

        let fetchedEvents = {
          id: post.id,
          title: post.name,
          description: post.description,
          url: post.event_url,
          // city: post.venue.city,
          // country: post.venue.country
        }

        events.push(fetchedEvents);

      })
     }).catch(err =>{
      console.log(err);
    })
    //console.log(this.state.events) ===>>PRINTS TO THE CONSOLe, ho
  }

  
  render() {

    return this.state.events.map(event =>(
      <div className="events" key={event.id}>
        <div>
          {/* <h3 align="center">Events</h3> */}
          <div className="contents" >
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            <a href={event.url} _target="blank" rel="noopener noreferrer">Read more...</a>
            <Link to="/share-page">
              <button className="btn" variant="info" >Share</button>
            </Link>
          </div>
        </div>
      </div>
    ))
  }
}

export default Events
