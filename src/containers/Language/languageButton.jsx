import React from 'react';
import { Button } from '@mui/material';

const ToggleButton = ({ label, color, func }) => (
  <Button
    sx={{ p: 0.4 }}
    size="small"
    variant="contained"
    color={color}
    className="button"
    onClick={() => func(label)}
  >
    {label}
  </Button>
);

export default ToggleButton;
