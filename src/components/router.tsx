import React from 'react';
import Landing from '../containers/Landing';
import Video from '../containers/Video';
import Games from '../containers/Games';

const routes = {
  '/': () => <Landing />,
  '/video': () => <Video />,
  '/games': () => <Games />
};

export default routes;
