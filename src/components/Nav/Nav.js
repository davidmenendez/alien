import React from 'react';
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
  const links = [{
    name: 'Home',
    path: '/',
  }];
  const logoutHandler = e => {
    e.preventDefault();
    localStorage.removeItem('alienToken');
    dispatch(logout());
    history.push('/');
  };
  return (
    <nav className="nav">
      <div className="container">
        <h1>ALIEN</h1>
        <div className="nav-links">
          {links.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              activeClassName="nav--selected"
              className="nav-link"
            >
              {link.name}
            </NavLink>
          ))}
          <a href="/" className="nav-link" onClick={logoutHandler}>Log out</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
