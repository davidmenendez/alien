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
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
