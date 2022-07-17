import React from 'react';
import { FormControl, InputLabel, NativeSelect } from '@mui/material/';

const partOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const PartNumber = ({ handleChange, partNumber, label }) => {
  return (
    <FormControl sx={{ minWidth: 50, mb: 1, ml: 3 }}>
      <InputLabel id="part-select-label">{label}</InputLabel>
      <NativeSelect
        inputProps={{
          name: 'Party',
          id: 'part-select'
        }}
        value={partNumber}
        onChange={handleChange}
      >
        {partOptions.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default PartNumber;
