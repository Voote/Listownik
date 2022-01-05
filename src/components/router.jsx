import React from 'react';
import Landing from '../containers/Landing';
import Video from '../containers/Video';
import Games from '../containers/Games';
import Series from '../containers/Series';
import Inne from '../containers/Inne';

const routes = {
  '/': () => <Landing />,
  '/video': () => <Video />,
  '/games': () => <Games />,
  '/series': () => <Series />,
  '/inne': () => <Inne />
};

export default routes;
