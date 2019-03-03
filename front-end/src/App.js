import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/Login/index';
import NewUser from './pages/NewUser/index';
import Home from './pages/HomePage/Home/Home';
import ShareForm from "./pages/Share/ShareForm";
import SharePage from "./pages/Share/SharePage";
import User from "./pages/User";
// import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
  {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/new-user" component={NewUser} /> 
        <Route exact path="/home" component={Home} />
        <Route exact path="/share" component={ShareForm} />
        <Route exact path="/share-page" component={SharePage} />
        <Route exact path="/profile" component={User} />
      </Switch>
    </div>
  </Router>
);

export default App;