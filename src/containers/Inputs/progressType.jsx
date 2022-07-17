import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material/';

const ProgressType = ({ handleChange, progressType, label }) => (
  <FormControl>
    <FormLabel
      id="progress-radio-buttons-group-label"
      className="labels__center--left"
      sx={{ fontSize: 18, marginTop: '0.4em' }}
      color="primary"
    >
      {label}
    </FormLabel>
    <RadioGroup
      row
      aria-labelledby="progress-radio-buttons-group-label"
      name="progress-buttons-group"
      value={progressType}
      onChange={handleChange}
    >
      <FormControlLabel value="seen" control={<Radio />} label="Seen" />
      <FormControlLabel value="now" control={<Radio />} label="Now" />
      <FormControlLabel value="soon" control={<Radio />} label="Soon" />
    </RadioGroup>
  </FormControl>
);

export default ProgressType;
