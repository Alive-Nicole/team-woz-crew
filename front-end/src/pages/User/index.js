import React, {Component} from 'react';
import fetch from 'node-fetch';
import axios from 'axios';

require("./index.css");

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      edit: false,
      password: "",
      newPassword: "",
      confNewPassword: "",
      noMatch: false,
      rejected: false
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
        this.setState({ user: data })
      })
      .catch(err => console.log('====err====', err)) 
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    if(name.includes("languages", "technologies", "interests")){
      const splitValue = value.split(",");
      this.setState({
        [name]: splitValue
      });  
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  handleLogout() {
    fetch("/api/auth/logout")
      .then(payload => {
        if (payload.status === 200){
          this.props.history.push("/")
        }
      })
      .catch(err => console.log('====err====', err))
  }

  handleFormDisplay() {
    if(this.state.edit === false){
      this.setState({edit: true})
    }else {
      this.setState({edit: false})
    }
  }

  handlePasswordChange() {
    const { user, password, newPassword, confNewPassword } = this.state;

    if(newPassword === confNewPassword){
      axios.post(`/api/user/change-password/${user.username}`, {password, newPassword})
      .then(payload => {
        console.log('====payload====', payload)
        if(payload.data.status === 401){
          this.setState({rejected: true})
        }else if(payload.status === 200){
          this.setState({ user: payload, edit: false })
          this.props.history.push("/")
        }
      })
      .catch(err => console.log(err)) 
    }
  }

  render() {
    const { user } = this.state;
    if ( user === null ) return <p>Loading ...</p>;
    this.state.noMatch = this.state.newPassword !== this.state.confNewPassword ? true : false;
    return (
      <div className="container">
        <div className="row">
        <div className="card-header"> {user.picture}</div>
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
            <button type="button" onClick={this.handleLogout.bind(this)} className="btn btn-primary">Logout</button>
            {this.state.edit ?
            <div>
              <form className="form">
                <input
                      name="password"
                      disabled={this.state.disabled}
                      type="text"
                      onChange={this.handleInputChange.bind(this)}
                      className="form-control"
                      placeholder="Enter Current Password."
                    />
                  <input
                      name="newPassword"
                      disabled={this.state.disabled}
                      type="text"
                      onChange={this.handleInputChange.bind(this)}
                      className="form-control"
                      placeholder="Enter New Password."
                    />
                  <input
                      name="confNewPassword"
                      disabled={this.state.disabled}
                      type="text"
                      onChange={this.handleInputChange.bind(this)}
                      className="form-control"
                      placeholder="Confirm New Password."
                    />
                {this.state.noMatch ? <small>Passwords Do Not Match!</small> : <div></div>}
                {this.state.rejected ? <small>Old Password Is Incorrect!</small> : <div></div>}
                <button className="btn btn-primary" type="button" onClick={this.handlePasswordChange.bind(this)} className="btn btn-primary">Submit Change</button>
              </form>
              <button className="btn btn-primary" type="button" onClick={this.handleFormDisplay.bind(this)}>Hide</button>
            </div> : <div><button className="btn btn-primary" type="button" onClick={this.handleFormDisplay.bind(this)}>Change Password</button></div> }
          </div>
        </div>
      </div>
    )
  }
}