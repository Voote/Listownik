import { ColorType } from './languageButton';

const colors = {
  yellow: 'primary',
  grey: 'secondary'
};

export const setColor = (color: string, setter: (colors: ColorType) => void) =>
  color === colors.grey ? setter(colors.yellow) : setter(colors.grey);
