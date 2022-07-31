import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../DataProvider';
import { setColor } from './colors';
import language from '../../assets/language';
import ToggleButton from './languageButton';

const ColorToggle = () => {
  const { setLang } = useContext(LanguageContext);
  const [engColor, setEngColor] = useState('secondary');
  const [plColor, setPlColor] = useState('primary');
  const toggleLanguage = (label) => {
    setColor(engColor, setEngColor);
    setColor(plColor, setPlColor);
    setLang(label);
  };
  const isActive = (label) =>
    label === language.eng
      ? engColor === 'secondary' || toggleLanguage(label)
      : plColor === 'secondary' || toggleLanguage(label);

  return (
    <div className="button__toggle">
      <ToggleButton label={language.eng} color={engColor} func={isActive} />
      <ToggleButton label={language.pl} color={plColor} func={isActive} />
    </div>
  );
};

export default ColorToggle;
