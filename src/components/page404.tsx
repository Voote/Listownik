import React, { useContext } from 'react';
import { LanguageContext } from '../DataProvider';

const PageNotFound = () => {
  const { labels }: any = useContext(LanguageContext);

  return (
    <div>
      <div>
        <h1>{labels.error404}</h1>
        <h2>{labels.errorDescribtion}</h2>
      </div>
    </div>
  );
};

export default PageNotFound;
