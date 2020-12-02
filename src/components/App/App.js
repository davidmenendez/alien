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
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/search" component={Search} withSidebar />
        <PrivateRoute exact path="/arena" component={Arena} withSidebar />
        <PrivateRoute exact path="/profile/:id" component={Profile} withSidebar />
        <PrivateRoute exact path="/bank" component={Bank} withSidebar />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
