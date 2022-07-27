import React from 'react';
import labels from '../assets/labels';

const PageNotFound = () => (
  <div>
    <div>
      <h1>{labels.error404}</h1>
      <h2>{labels.errorDescribtion}</h2>
    </div>
  </div>
);

export default PageNotFound;
