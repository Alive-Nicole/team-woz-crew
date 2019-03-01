import React, {Component} from 'react';
import axios from 'axios';
import fetch from 'node-fetch';
import { get } from 'mongoose';

require("./index.css");

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    if(this.props.history.location.state){
      const username = this.props.history.location.state.payload;
      fetch(`/api/user/${username}`, {
        method: "GET", 
        credentials: 'include'
      })
      .then(payload => payload.json())
      .then(data => {
        console.log('====data====', data)
        this.setState({ user: data })})
        .catch(err => console.log('====err====', err)) 
    }else {

    }
    // axios.defaults.baseURL = "http://localhost:3001"
    // axios.get(`http://localhost:3001/api/user/${username}`)
  }

  handleLogout() {
    fetch("/api/auth/logout")
    // .then(payload => payload.json())
    .then(console.log)
    .catch(err => console.log('====err====', err))
  }

  render() {
    const { user } = this.state;
    if ( user === null ) return <p>Loading ...</p>;

    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{user.username}</h1>
            {/* <p className="card-text">{user.firstName}, { user.lastName}</p>
            <p className="card-text">{user.phone}</p>
            <p className="card-text">{user.email}</p>
            <p className="card-text">{user.linkedIn}</p>
            <p className="card-text">{user.gitHub}</p>
            <p className="card-text">{user.languages.length}</p>
            <p className="card-text">{user.technologies.length}</p>
            <p className="card-text">{user.interests.length}</p> */}

            <hr className="my-4" />
            <button type="button" onClick={this.handleLogout} className="btn btn-primary">Logout</button>
          </div>
        </div>
      </div>
    )
  }
}