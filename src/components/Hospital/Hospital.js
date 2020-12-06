import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../utils/api';
import { fetchUser } from '../../features/user/userSlice';

const Hospital = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const {
    maxHp,
    currentHp,
    name,
  } = user;

  const needsHealing = currentHp < maxHp;

  const onClickHandler = async () => {
    try {
      await api('user/heal', {
        method: 'POST',
      });
      dispatch(fetchUser());
    } catch (err) {
      console.error('fetch failed', err);
    }
  };

  return (
    <>
      <h2 className="page-header">The Hospital</h2>
      <p>Welcome to the hospital, {name}.</p>
      {needsHealing ? (
        <>
          <p>You appear to be in need of healing</p>
          <button className="button button--primary" onClick={onClickHandler}>heal</button>
        </>
      ) : (
        <p>You don't appear to be in need of healing. You should return to the <Link to="/hub">Hub</Link>.</p>
      )}
    </>
  )
};

export default Hospital;
