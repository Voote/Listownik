import React, { useContext } from 'react';
import { LanguageContext } from '../DataProvider';

const Footer = () => {
  const { labels }: any = useContext(LanguageContext);

  return (
    <div>
      <div style={{ textAlign: 'center', padding: '1em' }}>
        <h1 style={{ color: 'gold' }}>{labels.footerHere}</h1>
        <h3>{labels.footerCopyRights}</h3>
      </div>
    </div>
  );
};

export default Footer;
