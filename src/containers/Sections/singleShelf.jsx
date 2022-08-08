import React from 'react';
import LanguageToggle from '../Language/languageToggle';
import Shelf from './shelf';

const SingleShelf = ({ data, label, finished, first }) => (
  <div>
    <div>
      {first && <LanguageToggle />}
      <h1 className="labels--yellow-line">{label.toUpperCase()}</h1>
    </div>
    <div>{finished ? <Shelf api={data} finished /> : <Shelf api={data} />}</div>
  </div>
);

export default SingleShelf;
