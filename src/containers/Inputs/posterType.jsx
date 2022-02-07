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
        <MenuItem value={10}>Game</MenuItem>
        <MenuItem value={20}>Movie</MenuItem>
        <MenuItem value={21}>Series</MenuItem>
        <MenuItem value={30}>Book</MenuItem>
        <MenuItem value={31}>Comics</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PosterType;
