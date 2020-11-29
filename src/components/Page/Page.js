import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner';
import Nav from '../Nav';
import Sidebar from '../Sidebar';
import './Page.scss';

const Page = ({
  children,
  withSidebar,
}) => {
  const { status } = useSelector(state => state.user);
  if (status === 'failed') return <Redirect to="/" />;
  const contentClasses = ['page-content'];
  if (withSidebar) contentClasses.push('sidebar-layout');
  return (
    <div className="page">
      <Nav />
      <div className="page-container">
        <div className="container">
          {status === 'loading' ? (
            <Spinner />
          ) : (
              <div className={withSidebar ? 'sidebar-layout': ''}>
                {withSidebar && <Sidebar />}
                <section className="page-content">
                  {children}
                </section>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Page;
