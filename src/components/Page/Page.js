import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Nav from '../Nav';
import Sidebar from '../Sidebar';
import './Page.scss';

const Page = ({
  children,
  sidebar,
}) => {
  const {
    status,
    loggedIn,
  } = useSelector(state => state.user);
  const layoutClasses = ['page-layout', 'container'];
  if (sidebar) layoutClasses.push('page-layout--sidebar');
  if (status !== 'loading' && !loggedIn) return <Redirect to="/" />
  return (
    <div className="page">
      <Nav />
      <div className={layoutClasses.join(' ')}>
        {sidebar && <Sidebar />}
        <section className="page-content">
          {children}
        </section>
      </div>
    </div>
  );
};

Page.defaultProps = {
  sidebar: true,
};

export default Page;
