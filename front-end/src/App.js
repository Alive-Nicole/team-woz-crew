import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
// import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
  {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  </Router>
);

export default App;
