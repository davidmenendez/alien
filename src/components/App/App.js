import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Signup from '../Signup';
import Login from '../Login';
import Home from '../Home';
import Search from '../Search';
import Arena from '../Arena';
import Profile from '../Profile';
import Bank from '../Bank';
import NotFound from '../NotFound';
import Landing from '../Landing';
import Hub from '../Hub';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (
          <Landing>
            <Login />
          </Landing>
        )} />
        <Route exact path="/signup" render={() => (
          <Landing>
            <Signup />
          </Landing>
        )} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/search" component={Search} sidebar />
        <PrivateRoute exact path="/arena" component={Arena} sidebar />
        <PrivateRoute exact path="/profile/:id" component={Profile} sidebar />
        <PrivateRoute exact path="/bank" component={Bank} sidebar />
        <PrivateRoute exact path="/hub" component={Hub} sidebar />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
