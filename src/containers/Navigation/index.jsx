import React from 'react';
import PageNotFound from '../../components/page404';
import Navbar from './Navbar';

const Navigation = ({ routeResult }) => (
  <nav className="navbar__position">
    <Navbar />
    {routeResult || <PageNotFound />}
  </nav>
);

export default Navigation;
