import React from 'react';
import Landing from '../containers/Landing';
import Movies from '../containers/Movies';
import Games from '../containers/Games';
import Series from '../containers/Series';
import Inne from '../containers/Inne';

const routes = {
  '/': () => <Landing />,
  '/movies': () => <Movies />,
  '/games': () => <Games />,
  '/series': () => <Series />,
  '/inne': () => <Inne />
};

export default routes;
