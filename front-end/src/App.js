import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import { createBrowserHistory } from 'history';
//import { ShareRouter } from '../../back-end/routes/api/share'

import Login from './pages/Login/';
import NewUser from './pages/NewUser/';
import Home from './pages/HomePage/Home';
import SharePage from "./pages/SharePage";
import User from "./pages/User";
import NavigationBar from "./components/NavigationBar";
import Users from "./pages/Users"

const customHistory = createBrowserHistory();

const App = () => (
  <Router history={customHistory}>
    <div>
      <Row>
        <Col>
          <NavigationBar history={customHistory}/>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/new-user" component={NewUser} /> 
        <Route path="/home" component={Home} />
        <Route path="/share-page" component={SharePage} />
        {/* <Route path="/:topic" component={ShareRouter} /> */}
        
        <Route path="/profile" component={User} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>
  </Router>
);

export default App;