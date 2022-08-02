import React from 'react';
import ColorToggle from '../Language/toggle';
import Shelf from './shelf';

const SingleShelf = ({ data, label, finished, first }: any) => (
  <div>
    <div>
      {first && <ColorToggle />}
      <h1 className="labels--yellow-line">{label.toUpperCase()}</h1>
    </div>
    <div>
      {finished ? (
        <Shelf api={data} finished={true} />
      ) : (
        <Shelf api={data} finished={false} />
      )}
    </div>
  </div>
);

export default SingleShelf;
