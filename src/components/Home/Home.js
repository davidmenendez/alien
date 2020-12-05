import React from 'react';
import { useSelector } from 'react-redux';
import AlienIcon from '../AlienIcon';
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
      <table className="table">
        <tbody>
          {Object.keys(user).map(prop => (
            <tr key={prop}>
              <th>{prop}</th>
              <td>{user[prop]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
