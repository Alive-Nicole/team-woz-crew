import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Users from './Users/Users';
import User from './User/User';
import {Route} from 'react-router-dom';
import NewUser from './NewUser/NewUser';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path ='/' component={Users}/>
        <Route exact path ='/user/:userId' component={User}/>  
        <Route exact path = '/'  component={NewUser}/>
      </div>
    );
  }
}

export default App;