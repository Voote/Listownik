import React from 'react';
import Grid from '@mui/material/Grid';
import labels from '../../assets/labels';
import { NavLink } from './NavLink';

const Navbar = () => (
  <Grid container spacing={1} className="navbar">
    <Grid item xs={1} />
    <Grid item xs={3}>
      <NavLink href="/">
        <h2 className="labels__center">{labels.placeholderNavHome}</h2>
      </NavLink>
    </Grid>
    <Grid item xs={4}>
      <NavLink href="/video">
        <h2 className="labels__center">{labels.placeholderNavVideo}</h2>
      </NavLink>
    </Grid>
    <Grid item xs={3}>
      <NavLink href="/games">
        <h2 className="labels__center">{labels.placeholderNavGames}</h2>
      </NavLink>
    </Grid>
  </Grid>
);

export default Navbar;
