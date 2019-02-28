import React, {Component} from 'react';
import axios from 'axios';
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
    const username = this.props.history.location.state.payload;
    // axios.get(`http://localhost:3001/api/user/${username}`)
    fetch(`http://localhost:3001/api/user/${username}`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache"
    })
    .then(payload => payload.json())
    .then(data => this.setState({ user: data[0] }))
    .catch(err => console.log('====err====', err)) 
  }

  handleLogout() {
    // fetch()
  }

  render() {
    const { user } = this.state;
    if ( user === null ) return <p>Loading ...</p>;

    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{user.username}</h1>
            <p className="card-text">{user.firstName}, { user.lastName}</p>
            <p className="card-text">{user.phone}</p>
            <p className="card-text">{user.email}</p>
            <p className="card-text">{user.linkedIn}</p>
            <p className="card-text">{user.gitHub}</p>
            <p className="card-text">{user.languages.length}</p>
            <p className="card-text">{user.technologies.length}</p>
            <p className="card-text">{user.interests.length}</p>

            <hr className="my-4" />
            <button type="button" onClick={this.handleLogout} className="btn btn-primary">Logout</button>
          </div>
        </div>
      </div>
    )
  }
}