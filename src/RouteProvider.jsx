import React from 'react';
import { useRoutes } from 'hookrouter';
import Navigation from './containers/Navigation/index';
import Footer from './components/footer';
import routes from './components/router';
// import { DataProvider } from './DataProvider';

const RouteProvider = () => {
  const routeResult = useRoutes(routes);

  return (
    <>
      <Navigation routeResult={routeResult} />
      <Footer />
    </>
  );
};

export default RouteProvider;
