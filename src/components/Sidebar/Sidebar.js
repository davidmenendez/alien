import React from 'react';
import { useSelector } from 'react-redux';
import AlienIcon from '../AlienIcon';
import HealthBar from '../HealthBar';
import Spinner from '../Spinner';
import './Sidebar.scss';

const Sidebar = () => {
  const {
    user,
    status,
  } = useSelector(state => state.user);
  const {
    name,
    color,
    credits,
  } = user;
  return (
    <aside className="sidebar">
      {status === 'loading' ? (
        <Spinner />
      ) : (
          <>
            <AlienIcon fill={color} />
            <HealthBar />
            <p>{name}</p>
            <p>credits: {credits}</p>
          </>
        )}
    </aside>
  );
};

export default Sidebar;
