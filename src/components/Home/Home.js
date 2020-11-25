import React from 'react';
import Page from '../Page';
import { useSelector } from 'react-redux';
import AlienIcon from '../AlienIcon';
import './Home.scss';

const Home = () => {
  const { user } = useSelector(state => state.user);
  return (
    <Page>
      <header className="home-header">
        <h3>welcome home, {user.name}!</h3>
        <AlienIcon fill={user.color} />
      </header>
      <p>user info</p>
      <table>
        <thead>
          <tr>
            {Object.keys(user).map(o => <th key={o} scope="col">{o}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(user).map(o => <td key={o}>{user[o]}</td>)}
          </tr>
        </tbody>
      </table>
    </Page >
  );
};

export default Home;
