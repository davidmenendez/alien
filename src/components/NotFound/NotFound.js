import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => (
  <div className="not-found">
    <div className="countainer">
      <h1 className="jumbo">404</h1>
      <Link to="/">Return to INRITH</Link>
    </div>
  </div>
);

export default NotFound;
