import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Nav from '../Nav';
import Sidebar from '../Sidebar';
import Spinner from '../Spinner';
import './Page.scss';

const Page = ({
  children,
  noSidebar,
}) => {
  const { status, loggedIn } = useSelector(state => state.user);
  const layoutClasses = ['page-layout', 'container'];
  if (noSidebar) layoutClasses.push('page-layout--sidebar');
  if (status !== 'loading' && !loggedIn) return <Redirect to="/" />
  return (
    <div className="page">
      <Nav />
      {status === 'loading' ? (
        <Spinner />
      ) : (
          <div className={layoutClasses.join(' ')}>
        {!noSidebar && <Sidebar />}
            <section className="page-content">
              {children}
            </section>
          </div>
        )}
    </div>
  );
};

export default Page;
