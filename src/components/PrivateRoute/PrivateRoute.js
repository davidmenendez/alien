import React from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';
import Page from '../Page';

const PrivateRoute = ({
  component: Component,
  withSidebar,
  ...rest
}) => {
  const token = localStorage.getItem('alienToken');
  const route = (
    <Route {...rest} render={props => {
      if (!token) return <Redirect to="/" />
      return (
        <Page withSidebar={withSidebar}>
          <Component {...props} />
        </Page>
      );
    }} />
  );
  return route;
};

export default PrivateRoute;
