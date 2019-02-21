import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Users from './Users/Users';
import User from './User/User';
import NewUser from './NewUser/NewUser';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
class App extends Component {
  render() {
    return (
    <Router>
      <div>
      <NavBar/>
    
        <Switch>
      <Route exact path ='/' component={Users}/>
      <Route exact path ='/user/:userId' component={User}/>  
      <Route exact path = '/'  component={NewUser}/>
      <Route exact path="/" component={Login} /> 
      </Switch>
      </div>
    </Router>
    
      
    );
  }
}


export default App;