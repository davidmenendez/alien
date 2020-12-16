import React from 'react';
import { Link } from 'react-router-dom';

const Hub = () => {
  const links = [
    'home',
    'arena',
    'bank',
    'search',
    'hospital',
    'armory',
  ].sort((a, b) => a.localeCompare(b));
  return (
    <>
      <div className="page-header">
        <h2>THE HUB</h2>
        <p>The cener of town, aka The Hub, where a fella can find anything they need</p>
      </div>
      <ul>
        {links.map(link => (
          <li key={link}>
            <Link to={`/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Hub;
