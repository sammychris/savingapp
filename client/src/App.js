import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Loginpage from './Loginpage';
import Registerpage from './Registerpage';
import Userpage from './Userpage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Navigation } from './Components';


function App() {
  return (
      <Router>
        <Navigation />
        <Switch>
          <div className="App">
            <Route exact path="/" component={Homepage} />
            <Route path="/login"  component={Loginpage} />
            <Route path="/register"  component={Registerpage} />
            <Route path="/dashboard"  component={Userpage} />
          </div>
        </Switch>
      </Router>
  );
}

export default App;
