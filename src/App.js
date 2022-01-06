import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './components/router';
import './assets/styles.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {
  const routeResult = useRoutes(routes);
  return (
    <div>
      <Navbar routeResult={routeResult} />
      <Footer />
    </div>
  );
};

export default App;
