import React from 'react';
import { FormControl, InputLabel, NativeSelect } from '@mui/material/';
import DatePicker from '@mui/lab/DatePicker';
import { yearOptions } from '../../components/partOptions';

const Year = ({ handleChange, year }) => (
  <FormControl sx={{ minWidth: 50, mb: 1, ml: 4 }}>
    <InputLabel id="year-select-label">Year</InputLabel>
    <NativeSelect
      inputProps={{
        name: 'Year',
        id: 'year-select'
      }}
      value={year}
      onChange={handleChange}
    >
      {yearOptions.reverse().map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </NativeSelect>
  </FormControl>
);

export default Year;
{/* <DatePicker
              views={['year']}
              label="Year only"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            /> */}