import React, { useContext } from 'react';
import { LanguageContext } from '../DataProvider';
import ScrollUp from './scrollUp';

const Footer = () => {
  const { labels } = useContext(LanguageContext);

  return (
    <div>
      <ScrollUp />
      <div style={{ textAlign: 'center', padding: '1em' }}>
        <h1 style={{ color: 'gold' }}>{labels.footerHere}</h1>
        <h3>{labels.footerCopyRights}</h3>
      </div>
    </div>
  );
};

export default Footer;
