import React, { Component } from 'react';

const Meetup_API = "2657185b242c4410412771346973716d";
export class Events extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      name: "",
      description: "",
      event_url: "",
      state: "",
      country: "",
    }
    this.getMeetup();
  }

  //Get Meetup API
  getMeetup() {
    fetch(`https://api.meetup.com/2/concierge?&sign=true&photo-host=public&zip=30296&country=US&city=Riverdale&state=GA&fields=technology&key=${Meetup_API}`)
    .then((res) => res.json())
    .then((data) => {

      var response = data.articles;
      for(var i = 0; i<5; i++){
        console.log(response[i].state);
        this.setState({
          id: i,
          name: response[i].name,
          description: response[i].description,
          event_url: response[i].event_url.toString(),
          state: response[i].state,
          country: response[i].country, 
        })
      }
    })
  }

  
  render() {
    return (
      <div className="events"> 
        <div className = "section1">
          <h3>Events</h3>      
          <h5>Event Title</h5>
          <p>Event content</p>
        </div>
      </div>
    )
  }
}

export default Events
