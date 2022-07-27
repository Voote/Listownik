import React from 'react';
import labels from '../assets/labels';

const Footer = () => (
  <div>
    <div style={{ textAlign: 'center', padding: '1em' }}>
      <h1 style={{ color: 'gold' }}>{labels.footerHere}</h1>
      <h3>{labels.footerCopyRights}</h3>
    </div>
  </div>
);

export default Footer;
