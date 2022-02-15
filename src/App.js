import React from 'react';
import { useRoutes } from 'hookrouter';
import { ThemeProvider } from '@mui/material/styles';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import myTheme from './assets/theme';
import routes from './components/router';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './assets/styles.scss';

const App = () => {
  const routeResult = useRoutes(routes);
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <ThemeProvider theme={myTheme}>
        <Navbar routeResult={routeResult} />
        <Footer />
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default App;
