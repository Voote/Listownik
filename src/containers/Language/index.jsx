import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { LanguageContext } from '../../DataProvider';
import { setColor } from './colors';
import language from '../../assets/language';

const LanguageButton = () => {
  const { setLang } = useContext(LanguageContext);
  const [engColor, setEngColor] = useState('secondary');
  const [plColor, setPlColor] = useState('primary');
  const handleChangeColor = () => {
    setColor(engColor, setEngColor);
    setColor(plColor, setPlColor);
  };
  const toggleLanguage = (label) => {
    handleChangeColor();
    setLang(label);
  };
  const isActive = (label) =>
    label === language.eng
      ? engColor === 'secondary' || toggleLanguage(label)
      : plColor === 'secondary' || toggleLanguage(label);

  const SimpleButton = ({ label, color }) => (
    <Button
      sx={{ p: 0.4 }}
      size="small"
      variant="contained"
      color={color}
      className="button"
      onClick={() => isActive(label)}
      // dodac logike zmiany label.js na labelPL.js
    >
      {label}
    </Button>
  );

  return (
    <div className="button__toggle">
      <SimpleButton label={language.eng} color={engColor} />
      <SimpleButton label={language.pl} color={plColor} />
    </div>
  );
};

export default LanguageButton;
