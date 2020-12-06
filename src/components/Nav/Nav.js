import React, { useState } from 'react';
import {
  NavLink
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user/userSlice';
import './Nav.scss';

const Nav = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const links = ['home', 'hub'];

  const logoutHandler = e => {
    e.preventDefault();
    localStorage.removeItem('alienToken');
    dispatch(logout());
    history.push('/');
  };

  const navToggleHandler = () => {
    setOpen(!open);
  };

  const useNavToggle = window.innerWidth < 576;
  const navClasses = ['nav'];
  if (useNavToggle) {
    if (open) navClasses.push('nav--open');
    else navClasses.push('nav--closed');
  }

  return (
    <nav className={navClasses.join(' ')}>
      <div className="container">
        <div className="nav-head">
          <h1>INRITH</h1>
          <div className="nav-toggle" onClick={navToggleHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="nav-links">
          {links.map(link => (
            <NavLink
              key={link}
              to={`/${link}`}
              activeClassName="nav--active"
              className="nav-link"
            >
              {link}
            </NavLink>
          ))}
          <a href="/" className="nav-link" onClick={logoutHandler}>Log out</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
