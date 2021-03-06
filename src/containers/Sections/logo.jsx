import React from 'react';
import { Grid } from '@mui/material';

const Logo = () => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
  >
    <Grid item xs={3}></Grid>
    <Grid item xs={1} className="layout__grid--central">
      <img
        className="image__logo--dimensions"
        src="./IMG/Listownik-Placeholder04.png"
        alt="LISTOWNIK"
      />
    </Grid>
  </Grid>
);

export default Logo;
