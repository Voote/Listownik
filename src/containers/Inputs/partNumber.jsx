import React from 'react';
import { FormControl, InputLabel, NativeSelect } from '@mui/material/';
import { partOptions } from '../../components/partOptions';

const PartNumber = ({ handleChange, partNumber }) => {
  return (
    <FormControl sx={{ minWidth: 50, mb: 1, ml: 7 }}>
      <InputLabel id="part-select-label">Part</InputLabel>
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
