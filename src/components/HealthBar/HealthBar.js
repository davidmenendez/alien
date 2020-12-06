import React from 'react';
import { useSelector } from 'react-redux';
import './HealthBar.scss';

const HealthBar = ({ large }) => {
  const { user } = useSelector(state => state.user);
  const {
    currentHp,
    maxHp,
  } = user;

  const healthbarClasses = ['healthbar'];
  if (large) healthbarClasses.push('healthbar--large');

  return (
    <div className={healthbarClasses.join(' ')}>
      <div className="healthbar-stats-container">
        <span className="healthbar-stats">{currentHp} / {maxHp}</span>
      </div>
      <div className="healthbar-inner" style={{ width: `${(currentHp / maxHp) * 100}%` }} />
    </div>
  );
};

export default HealthBar;
