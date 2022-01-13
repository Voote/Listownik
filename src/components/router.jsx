import React from 'react';
import Landing from '../containers/Landing';
import Video from '../containers/Video';
import Games from '../containers/Games';
import Books from '../containers/Books';
import Inne from '../containers/Inne';

const routes = {
  '/': () => <Landing />,
  '/video': () => <Video />,
  '/games': () => <Games />,
  '/books': () => <Books />,
  '/inne': () => <Inne />
};

export default routes;
