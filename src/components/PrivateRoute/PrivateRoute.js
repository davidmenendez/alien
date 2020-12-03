import React from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';
import Page from '../Page';

const PrivateRoute = ({
  component: Component,
  sidebar,
  ...rest
}) => {
  const token = localStorage.getItem('alienToken');
  const route = (
    <Route {...rest} render={props => {
      if (!token) return <Redirect to="/" />
      return (
        <Page sidebar={sidebar}>
          <Component {...props} />
        </Page>
      );
    }} />
  );
  return route;
};

export default PrivateRoute;
