const colors = {
  yellow: 'primary',
  grey: 'secondary'
};

export const setColor = (color: string, setter: any) =>
  color === colors.grey ? setter(colors.yellow) : setter(colors.grey);
