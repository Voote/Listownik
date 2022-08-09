import { ThemeProvider } from '@mui/material/styles';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import DataProvider from './DataProvider';
import myTheme from './assets/theme';
import bgLocale from 'date-fns/locale/bg';

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
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={bgLocale}
      >
        <ThemeProvider theme={myTheme}>
          <DataProvider />
          {children}
        </ThemeProvider>
      </LocalizationProvider>
    </ClientContext.Provider>
  );
};

export default AppProvider;
