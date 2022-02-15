import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material/';

const ProgressType = ({ handleChange, progressType }) => (
  <FormControl>
    <FormLabel
      id="progress-radio-buttons-group-label"
      className="labels__center--left"
      sx={{ fontSize: 18 }}
      color="primary"
    >
      Progress
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
      <FormControlLabel value="todo" control={<Radio />} label="ToDo" />
    </RadioGroup>
  </FormControl>
);

export default ProgressType;
