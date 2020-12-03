import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../Nav';
import Sidebar from '../Sidebar';
import Spinner from '../Spinner';
import './Page.scss';

const Page = ({
  children,
  sidebar,
}) => {
  const { status } = useSelector(state => state.user);
  const layoutClasses = ['page-layout'];
  if (sidebar) layoutClasses.push('page-layout--sidebar')
  return (
    <div className="page">
      <Nav />
      <div className="container">
        {status === 'loading' ? (
          <Spinner />
        ) : (
            <div className={layoutClasses.join(' ')}>
              {sidebar && <Sidebar />}
              <section className="page-content">
                {children}
              </section>
            </div>
          )}
      </div>
    </div>
  );
};

export default Page;
