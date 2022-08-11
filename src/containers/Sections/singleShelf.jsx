import React from 'react';
import LanguageToggle from '../Language/languageToggle';
import Shelf from './shelf';

const SingleShelf = ({ data, finished, first, label, light }) => (
  <div className={light ? '' : 'layout__section--grey'}>
    <div>
      {first && <LanguageToggle />}
      <h1 className="layout__line layout__line--yellow">
        {label.toUpperCase()}
      </h1>
    </div>
    <div>{finished ? <Shelf api={data} finished /> : <Shelf api={data} />}</div>
  </div>
);

export default SingleShelf;
