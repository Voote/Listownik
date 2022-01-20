import { createTheme } from '@mui/material/styles';

const myTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#616161'
    },
    secondary: {
      main: '#ffff00',
      dark: '#a2a200'
    },
    divider: '#7c4dff'
  }
});

export default myTheme;
