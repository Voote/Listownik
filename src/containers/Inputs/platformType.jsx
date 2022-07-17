import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material/';

const arr = [
  { id: 0, value: 'PS4', name: 'PS4' },
  { id: 1, value: 'PS5', name: 'PS5' },
  { id: 2, value: 'STI', name: 'Stadia' },
  { id: 3, value: 'EMU', name: 'Emulator' },
  { id: 4, value: 'NS', name: 'Switch' },
  { id: 5, value: 'PC', name: 'PC' },
  { id: 6, value: 'Nflx', name: 'Netflix' },
  { id: 7, value: 'Ama', name: 'Amazon' },
  { id: 8, value: 'Cin', name: 'Cinema' },
  { id: 9, value: 'Dis', name: 'HBO' },
  { id: 10, value: 'Hulu', name: 'Hulu' },
  { id: 11, value: 'DVD', name: 'DVD' }
];

const PlatformType = ({ handleChange, posterType, platform, label }) => {
  return (
    <FormControl sx={{ minWidth: 110, mb: 2, ml: 2.4 }}>
      <InputLabel id="platform-select-label">{label}</InputLabel>
      {(posterType === 'game' && (
        <Select
          labelId="platform-select-label"
          id="platform-select"
          value={platform}
          onChange={handleChange}
          autoWidth
          label="platform"
        >
          <MenuItem value={arr[0].value}>{arr[0].name}</MenuItem>
          <MenuItem value={arr[1].value}>{arr[1].name}</MenuItem>
          <MenuItem value={arr[2].value}>{arr[2].name}</MenuItem>
          <MenuItem value={arr[3].value}>{arr[3].name}</MenuItem>
          <MenuItem value={arr[4].value}>{arr[4].name}</MenuItem>
          <MenuItem value={arr[5].value}>{arr[5].name}</MenuItem>
        </Select>
      )) ||
        (posterType === '' && (
          <Select
            labelId="platform-select-label"
            id="platform-select"
            value={platform}
            onChange={handleChange}
            autoWidth
            label="platform"
          >
            <MenuItem value={''}>Chose Type</MenuItem>
          </Select>
        )) || (
          <Select
            labelId="platform-select-label"
            id="platform-select"
            value={platform}
            onChange={handleChange}
            autoWidth
            label="platform"
          >
            <MenuItem value={arr[6].value}>{arr[6].name}</MenuItem>
            <MenuItem value={arr[7].value}>{arr[7].name}</MenuItem>
            <MenuItem value={arr[8].value}>{arr[8].name}</MenuItem>
            <MenuItem value={arr[9].value}>{arr[9].name}</MenuItem>
            <MenuItem value={arr[10].value}>{arr[10].name}</MenuItem>
            <MenuItem value={arr[11].value}>{arr[11].name}</MenuItem>
          </Select>
        )}
    </FormControl>
  );
};

export default PlatformType;
