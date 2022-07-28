import React, { useState } from 'react';
import { Button } from '@mui/material';

const colors = {
  red: 'error',
  green: 'success'
};

const setColor = (color, setter) =>
  color === colors.red ? setter(colors.green) : setter(colors.red);

const LanguageButton = () => {
  const [engColor, setEngColor] = useState(colors.red);
  const [plColor, setPlColor] = useState(colors.green);
  const handleChangeColor = () => {
    setColor(engColor, setEngColor);
    setColor(plColor, setPlColor);
  };

  const SimpleButton = ({ label, color }) => (
    <Button
      sx={{ p: 0.4 }}
      size="small"
      variant="contained"
      color={color}
      className="button"
      onClick={() => handleChangeColor()}
      // dodac logike zmiany label.js na labelPL.js
    >
      {label}
    </Button>
  );

  return (
    <div style={{ display: 'block' }}>
      <SimpleButton label={'ENG'} color={engColor} />
      <SimpleButton label={'PL'} color={plColor} />
    </div>
  );
};

export default LanguageButton;
