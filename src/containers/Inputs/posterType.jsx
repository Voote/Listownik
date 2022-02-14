import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material/';

const PosterType = ({ handleChange, posterType }) => {
  return (
    <FormControl sx={{ minWidth: 100, mb: 1 }}>
      <InputLabel id="type-select-label">Type</InputLabel>
      <Select
        labelId="type-select-label"
        id="type-select"
        value={posterType}
        onChange={handleChange}
        autoWidth
        label="type"
      >
        <MenuItem value={'game'}>Game</MenuItem>
        <MenuItem value={'movie'}>Movie</MenuItem>
        <MenuItem value={'series'}>Series</MenuItem>
        <MenuItem value={'book'}>Book</MenuItem>
        <MenuItem value={'comics'}>Comics</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PosterType;
