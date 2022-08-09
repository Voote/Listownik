import { useContext, useState } from 'react';
import { languageLabel } from '../../assets/language';
import { LanguageContext } from '../../DataProvider';
import { setColor } from './colors';
import ToggleButton, { ColorType } from './languageButton';

const initialColor: ColorType = 'secondary';

const LanguageToggle = () => {
  const { setLang }: any = useContext(LanguageContext);
  const [engColor, setEngColor] = useState(initialColor);
  const [plColor, setPlColor] = useState('primary');
  const toggleLanguage = (label: string) => {
    setColor(engColor, setEngColor);
    setColor(plColor, setPlColor);
    setLang(label);
  };
  const isActive = (label: string) =>
    label === languageLabel.eng
      ? engColor === 'secondary' || toggleLanguage(label)
      : plColor === 'secondary' || toggleLanguage(label);

  return (
    <div className="button__toggle">
      <ToggleButton
        label={languageLabel.eng}
        color={engColor}
        func={isActive}
      />
      <ToggleButton label={languageLabel.pl} color={plColor} func={isActive} />
    </div>
  );
};

export default LanguageToggle;
