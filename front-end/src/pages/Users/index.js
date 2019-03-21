import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

require("./index.css");

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  async componentDidMount() {
    const users = (await axios.get('api/users')).data;
     this.setState({
       users,
     });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
        
          {this.state.users === null && <p>Loading Users...</p>}
          {
            this.state.users && this.state.users.map(user => (
              <div key={user.id} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/user/${user.id}`}>
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header"> {user.picture}</div>
                   
                    <div className="card-body">
                      <h4 className="card-title">{user.userName}</h4>
                      <p className="card-text">{user.firstName}, { user.lastName}</p>
                      <p className="card-text">{user.phone}</p>
                      <p className="card-text">{user.email}</p>
                      <p className="card-text">{user.linkedIn}</p>
                      <p className="card-text">{user.gitHub}</p>
                      <p className="card-text">{user.languages.length}</p>
                      <p className="card-text">{user.technologies.length}</p>
                      <p className="card-text">{user.interests.length}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}