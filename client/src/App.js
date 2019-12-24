import React from 'react';
import './App.css';
import Landingpage from './Landingpage';
import Loginpage from './Loginpage';
import Registerpage from './Registerpage';
import Userpage from './Userpage';
import Authpage from './Authpage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Navigation } from './Components';
import { ProtectedRoute, PublicRoute } from './helpers';


function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Switch>
          <PublicRoute exact path="/" component={Landingpage}/>
          <PublicRoute exact path="/login" component={Loginpage}/>
          <PublicRoute exact path="/register" component={Registerpage}/>
          <PublicRoute exact path="/authenticated" component={Authpage} />
          <ProtectedRoute exact path="/dashboard" component={Userpage} />
          <Route path="*" component={() => '404 Page Not Found!'} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
