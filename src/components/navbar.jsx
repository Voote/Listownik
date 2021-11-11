import React from 'react';
import labels from '../assets/labels';
import Grid from '@mui/material/Grid';

const Navbar = () => (
  <nav>
    <Grid container spacing={1}>
      <Grid item xs={1} />
      <Grid item xs={3}>
        <h2>{labels.placeholderNavFilmy}</h2>
      </Grid>
      <Grid item xs={3}>
        <h2>{labels.placeholderNavSeriale}</h2>
      </Grid>
      <Grid item xs={3}>
        <h2>{labels.placeholderNavGry}</h2>
      </Grid>
      <Grid item xs={2}>
        <h2>{labels.placeholderNavInne}</h2>
      </Grid>
    </Grid>
  </nav>
);

export default Navbar;
