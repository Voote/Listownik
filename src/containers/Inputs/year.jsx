import React from 'react';
import { TextField } from '@mui/material/';
import DatePicker from '@mui/lab/DatePicker';

const Year = ({ handleChange, year }) => (
  <DatePicker
    views={['year']}
    label="Release year"
    value={year}
    onChange={handleChange}
    renderInput={(params) => <TextField sx={{ width: '12.5vw' }} {...params} />}
  />
);

export default Year;
