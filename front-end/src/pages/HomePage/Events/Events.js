import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import axios from 'axios';


//const Meetup_API = "2657185b242c4410412771346973716d";

export class Events extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: null,
    }
  }

  // Get API for Events.
  async getEvents(){
    let events = [];
    let getJson = await axios.get('api-url').then(res => {
      console.log("successful");
    }).catch(error =>{
      console.log("Failed: ", error);
    });

    getJson.forEach(data => {
      events.push({
        id: 'data.Id',
        title: 'data.title',
        description: 'data.description',
        url: 'data.url',
        state: 'data.state',
        country: 'data.country'
      })  
    })

    this.setState({events: events})
  }
 

  //Get Meetup API
  // getMeetup() {
  //   fetch(`https://api.meetup.com/2/concierge?&sign=true&photo-host=public&zip=30296&country=US&city=Riverdale&state=GA&fields=technology&key=${Meetup_API}`)
  //   .then((res) => res.json())
  //   .then((data) => {

  //     var response = data.articles;
  //     for(var i = 0; i<5; i++){
  //       console.log(response[i].state);
  //       this.setState({
  //         id: i,
  //         name: response[i].name,
  //         description: response[i].description,
  //         event_url: response[i].event_url.toString(),
  //         state: response[i].state,
  //         country: response[i].country, 
  //       })
  //     }
  //   })
  // }

  
  render() {
    //const {events} = this.state;

    return (
      <div  className="events">
        <div>
          <h3 align="center">Events</h3>
          <div className="contents">

            <div className="content1">
              <h5>Event 1</h5>
              <div className="description">
                Sing long her way size. Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited. Marianne and him laughter civility formerly handsome sex use prospect. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but.
              </div>
              <a href="/url-of-post" _target="blank">Read more...</a>
              <Link to="/share">
                <Button variant="info" >Share</Button>
              </Link>
            </div>

            <div className="content2">
              <h5>Event 2</h5>
              <div className="description">
                Sing long her way size. Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited. Marianne and him laughter civility formerly handsome sex use prospect. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but.
              </div>
              <a href="/url-of-post" _target="blank">Read more...</a>
              <Button variant="info" >Share</Button>
            </div>

            <div className="content3">
              <h5>Event 3</h5>
              <div className="description">
                Sing long her way size. Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited. Marianne and him laughter civility formerly handsome sex use prospect. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but.
              </div>
              <a href="/url-of-post" _target="blank">Read more...</a>
              <Link to="/share">
                <Button variant="info" >Share</Button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Events
