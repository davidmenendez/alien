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
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <PrivateRoute path="/home" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
