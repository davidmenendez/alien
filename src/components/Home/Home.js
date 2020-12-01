import React from 'react';
import { useSelector } from 'react-redux';
import AlienIcon from '../AlienIcon';
import Table from '../Table';
import './Home.scss';

const Home = () => {
  const { user } = useSelector(state => state.user);
  return (
    <>
      <header className="home-header">
        <h3>welcome home, {user.name}!</h3>
        <AlienIcon fill={user.color} />
      </header>
      <p>user info</p>
      <Table
        cols={Object.keys(user)}
        rows={[user]}
      />
    </>
  );
};

export default Home;
