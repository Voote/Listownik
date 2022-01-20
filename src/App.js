import React from 'react';
import { useRoutes } from 'hookrouter';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from './assets/theme';
import routes from './components/router';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './assets/styles.scss';

const App = () => {
  const routeResult = useRoutes(routes);
  return (
    <ThemeProvider theme={myTheme}>
      <Navbar routeResult={routeResult} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
