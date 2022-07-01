import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterMoment';
import APIValidation from './APIValidation';
import myTheme from './assets/theme';
import './assets/styles.scss';

const API_TOKEN_DATO = '07b49703bf60130695f727dff41a2c';

const AppProvider = ({ children }) => {
  const client = new GraphQLClient({
    url: 'https://graphql.datocms.com/',
    headers: {
      Authorization: `Bearer ${API_TOKEN_DATO}`
    }
  });
  return (
    <ClientContext.Provider value={client}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <ThemeProvider theme={myTheme}>
          <APIValidation />
          {children}
        </ThemeProvider>
      </LocalizationProvider>
    </ClientContext.Provider>
  );
};

export default AppProvider;
