import React from 'react';
import { A, usePath } from 'hookrouter';
import Grid from '@mui/material/Grid';
import labels from '../../assets/labels';

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
