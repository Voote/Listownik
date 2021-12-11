import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './components/router';
import './assets/styles.scss';
import Navbar from './components/navbar';

const App = () => {
  const routeResult = useRoutes(routes);
  return <Navbar routeResult={routeResult} />;
};

export default App;
