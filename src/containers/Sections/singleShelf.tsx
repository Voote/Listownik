import React from 'react';
import ColorToggle from '../Language/toggle';
import Shelf from './shelf';

const SingleShelf = ({ data, label, finished, first }) => (
  <div>
    <div>
      {first && <ColorToggle />}
      <h1 className="labels--yellow-line">{label.toUpperCase()}</h1>
    </div>
    <div>{finished ? <Shelf api={data} finished /> : <Shelf api={data} />}</div>
  </div>
);

export default SingleShelf;
