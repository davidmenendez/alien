import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Signup from '../Signup';
import Login from '../Login';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
      </Switch>
    </Router>
  );
}

export default App;
