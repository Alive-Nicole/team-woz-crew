import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import User from './pages/User';
import Users from './pages/Users';
import NewUser from './pages/NewUser';
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <NavBar/>
        <Switch>
          {/* <Route exact path ='/' component={Users}/> */}
          <Route exact path="/" component={Login} /> 
          <Route exact path ='/user' component={User}/>  
          <Route exact path = '/new-user'  component={NewUser}/>
        </Switch>
        </div>
      </Router>    
    );
  }
}
export default App;