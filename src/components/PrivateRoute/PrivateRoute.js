import React from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('alienToken');
  const route = (
    <Route {...rest} render={props => {
      if (!token) return <Redirect to="/" />
      return <Component {...props} />
    }} />
  );
  return route;
};

export default PrivateRoute;
