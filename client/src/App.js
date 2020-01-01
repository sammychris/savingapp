import React from 'react';
import './App.css';
//import Landingpage from './Landingpage';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { ProtectedRoute, PublicRoute, Authpage } from './helpers';



import UserLayout from "layouts/User.jsx";
import VisitorLayout from "layouts/Visitor.jsx";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={props => <VisitorLayout {...props} />} />
          <Route path="/auth/login" render={props => <VisitorLayout {...props} />} />
          <PublicRoute exact path="/authenticated" component={Authpage} />
          <Route path="/user" render={props => <UserLayout {...props} />} />
          <Route path="*" component={() => '404 Page Not Found!'} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
