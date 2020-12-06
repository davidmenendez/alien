import React from 'react';
import { useSelector } from 'react-redux';
import AlienIcon from '../AlienIcon';
import HealthBar from '../HealthBar';
import './Sidebar.scss';

const Sidebar = () => {
  const { user } = useSelector(state => state.user);
  const { name, color } = user;
  return (
    <aside className="sidebar">
      <AlienIcon fill={color} />
      <HealthBar />
      <p>{name}</p>
    </aside>
  );
};

export default Sidebar;
