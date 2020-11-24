import React from 'react';
import './Page.css';

const Page = ({
  children,
  className,
}) => (
  <section className={['page', className].join(' ')}>
    <div className="container">
      {children}
    </div>
  </section>
);

export default Page;
