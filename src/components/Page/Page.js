import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner';
import Nav from '../Nav';
import './Page.scss';

const Page = ({
  children,
  className,
}) => {
  const { status } = useSelector(state => state.user);
  return (
    <div className={['page', className].join(' ')}>
      <Nav />
      <section className="page-content">
        <div className="container">
          {status === 'loading' ? <Spinner /> : children}
        </div>
      </section>
    </div>
  );
};

export default Page;
