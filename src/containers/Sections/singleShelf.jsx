import React from 'react';
import Shelf from './shelf';

const SingleShelf = ({ data, label, finished }) => (
  <div>
    <h1 className="labels--dark">{label.toUpperCase()}</h1>
    <div>{finished ? <Shelf api={data} finished /> : <Shelf api={data} />}</div>
  </div>
);

export default SingleShelf;
