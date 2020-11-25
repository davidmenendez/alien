import React from 'react';
import Page from '../Page';
import { useSelector } from 'react-redux';

const Home = () => {
  const { user } = useSelector(state => state.user);
  return (
    <Page>
      <h3>welcome home!</h3>
      <p>user info</p>
      <ul>
        {Object.keys(user).map(o => <li key={o}>{user[o]}</li>)}
      </ul>
    </Page>
  );
};

export default Home;
