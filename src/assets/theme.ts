import { createTheme } from '@mui/material/styles';

const myTheme = createTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: '#bebebe'
    },
    secondary: {
      main: '#ffe94c',
      dark: '#a2a200'
    },
    // black: {
    //   main: '#000000'
    // },
    divider: '#7c4dff'
  }
});

export default myTheme;
