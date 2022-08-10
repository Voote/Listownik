import React from 'react';
import { Grid } from '@mui/material';

const Logo = () => (
  <Grid
    className="layout__logo"
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
  >
    <Grid item xs={3}></Grid>
    <Grid item xs={1} className="layout__grid--central">
      <img
        className="image__logo"
        src="./IMG/Listownik_Logo.png"
        alt="LISTOWNIK"
      />
    </Grid>
  </Grid>
);

export default Logo;
