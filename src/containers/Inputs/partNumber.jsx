import React from 'react';
import { FormControl, InputLabel, NativeSelect } from '@mui/material/';
import { partOptions } from '../../components/partOptions';

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
