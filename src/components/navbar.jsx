import React from 'react';
import { A, usePath } from 'hookrouter';
import Grid from '@mui/material/Grid';
import labels from '../assets/labels';
import PageNotFound from './page404';

const CustomA = (props) => {
  const path = usePath();
  let { href, getProps, ...anchorProps } = props;
  const isCurrent = path === href;
  return <A href={href} {...getProps({ isCurrent })} {...anchorProps} />;
};

const NavLink = (props) => (
  <CustomA
    {...props}
    getProps={({ isCurrent }) => ({
      className: isCurrent ? 'navbar--active' : 'navbar--inactive'
    })}
  />
);

const Navbar = ({ routeResult }) => {
  return (
    <nav style={{ paddingTop: '11vh' }}>
      <Grid container spacing={1} className="navbar">
        <Grid item xs={1} />
        <Grid item xs={3}>
          <NavLink href="/">
            <h2 className="labels__navbar">{labels.placeholderNavHome}</h2>
          </NavLink>
        </Grid>
        <Grid item xs={3}>
          <NavLink href="/movies">
            <h2 className="labels__navbar">{labels.placeholderNavMovies}</h2>
          </NavLink>
        </Grid>
        <Grid item xs={2}>
          <NavLink href="/games">
            <h2 className="labels__navbar">{labels.placeholderNavGames}</h2>
          </NavLink>
        </Grid>
        <Grid item xs={2}>
          <NavLink href="/inne">
            <h2 className="labels__navbar">{labels.placeholderNavRest}</h2>
          </NavLink>
        </Grid>
      </Grid>
      {routeResult || <PageNotFound />}
    </nav>
  );
};

export default Navbar;
