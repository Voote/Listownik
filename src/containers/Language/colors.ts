const colors = {
  yellow: 'primary',
  grey: 'secondary'
};

export const setColor = (color, setter) =>
  color === colors.grey ? setter(colors.yellow) : setter(colors.grey);
