import React from 'react';
import { useSelector } from 'react-redux';
import AlienIcon from '../AlienIcon';
import './Home.scss';

const Home = () => {
  const { user } = useSelector(state => state.user);
  const formattedUser = {
    ...user,
    credits: user.credits.toLocaleString(),
  };
  return (
    <>
      <header className="home-header">
        <h3>welcome home, {formattedUser.name}!</h3>
        <AlienIcon fill={formattedUser.color} />
      </header>
      <p>user info</p>
      <table className="table">
        <tbody>
          {Object.keys(formattedUser).map(prop => (
            <tr key={prop}>
              <th>{prop}</th>
              <td>{formattedUser[prop]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
