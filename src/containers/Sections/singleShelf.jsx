import React from 'react';
import Shelf from './shelf';

const SingleShelf = ({ data, label }) => (
  <div>
    <h1 className="labels--dark">{label.toUpperCase()}</h1>
    <div>
      <Shelf api={data} />
    </div>
  </div>
);

export default SingleShelf;
