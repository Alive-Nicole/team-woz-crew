import React, {Component} from 'react';
import axios from 'axios';

require("./index.css");

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const user = (await axios.get(`http://localhost:8081/${params.userId}`)).data;
    this.setState({
      user,
    });
  }

  render() {
    const {user} = this.state;
    if (user === null) return <p>Loading ...</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{user.userName}</h1>
            <p className="card-text">{user.firstName}, { user.lastName}</p>
            <p className="card-text">{user.phone}</p>
            <p className="card-text">{user.email}</p>
            <p className="card-text">{user.linkedIn}</p>
            <p className="card-text">{user.gitHub}</p>
            <p className="card-text">{user.languages.length}</p>
            <p className="card-text">{user.technologies.length}</p>
            <p className="card-text">{user.interests.length}</p>

            <hr className="my-4" />
            
          </div>
        </div>
      </div>
    )
  }
}