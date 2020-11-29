import React from 'react';
import Page from '../Page';
import { useSelector } from 'react-redux';
import AlienIcon from '../AlienIcon';
import Table from '../Table';
import './Home.scss';

const Home = () => {
  const { user } = useSelector(state => state.user);
  const getUserCols = () => Object.keys(user);
  const cols = getUserCols();
  return (
    <Page>
      <header className="home-header">
        <h3>welcome home, {user.name}!</h3>
        <AlienIcon fill={user.color} />
      </header>
      <p>user info</p>
      <Table
        cols={cols}
        rows={user}
      />
    </Page >
  );
};

export default Home;
