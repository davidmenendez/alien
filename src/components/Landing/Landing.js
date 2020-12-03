import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { logout } from '../../features/user/userSlice';
import './Landing.scss';

const Landing = ({ children }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('alienToken');
  const { loggedIn } = useSelector(state => state.user);

  useEffect(() => {
    if (!token && loggedIn) dispatch(logout());
  }, [dispatch, loggedIn, token]);

  if (loggedIn) return <Redirect to="/home" />;

  return (
    <div className="container">
      <div className="landing-container">
        <section className="landing">
          {children}
        </section>
      </div>
    </div>
  );
};

export default Landing;
