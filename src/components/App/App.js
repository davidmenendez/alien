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
import Hospital from '../Hospital';
import Armory from '../Armory';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing>
            <Login />
          </Landing>
        </Route>
        <Route exact path="/signup">
          <Landing>
            <Signup />
          </Landing>
        </Route>
        <PrivateRoute exact path="/home" component={Home} sidebar={false} />
        <PrivateRoute exact path="/search" component={Search} />
        <PrivateRoute exact path="/arena" component={Arena} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/bank" component={Bank} />
        <PrivateRoute exact path="/hub" component={Hub} />
        <PrivateRoute exact path="/hospital" component={Hospital} />
        <PrivateRoute exact path="/armory" component={Armory} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
