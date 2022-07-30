import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { NavLink } from './NavLink';
import { LanguageContext } from '../../DataProvider';

const Navbar = () => {
  const { labels } = useContext(LanguageContext);

  return (
    <Grid container spacing={1} className="navbar">
      <Grid item xs={2} md={3} />
      <Grid item xs={3}>
        <NavLink href="/">
          <h2 className="labels__center">{labels.placeholderNavHome}</h2>
        </NavLink>
      </Grid>
      <Grid item xs={3}>
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
};

export default Navbar;
