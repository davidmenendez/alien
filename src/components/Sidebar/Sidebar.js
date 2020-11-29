import React from 'react';
import { useSelector } from 'react-redux';
import AlienIcon from '../AlienIcon';
import './Sidebar.scss';

const Sidebar = () => {
  const { user } = useSelector(state => state.user);
  return (
    <aside className="sidebar">
      <AlienIcon fill="red" />
      <p>{user.name}</p>
    </aside>
  );
};

export default Sidebar;
