import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material/';

const PlatformType = ({ handleChange, posterType, platform }) => {
  return (
    <FormControl sx={{ minWidth: 110, mb: 1 }}>
      <InputLabel id="platform-select-label">Platform</InputLabel>
      {(posterType === (10 || 20) && (
        <Select
          labelId="platform-select-label"
          id="platform-select"
          value={platform}
          onChange={handleChange}
          autoWidth
          label="platform"
        >
          <MenuItem value={'PS4'}>PS4</MenuItem>
          <MenuItem value={'NS'}>Switch</MenuItem>
          <MenuItem value={'STI'}>Stadia</MenuItem>
          <MenuItem value={'EMU'}>Emulator</MenuItem>
          <MenuItem value={'PC'}>PC</MenuItem>
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
            <MenuItem value={'PS4'}>Amazon</MenuItem>
            <MenuItem value={'NS'}>Netflix</MenuItem>
            <MenuItem value={'STI'}>Cinema</MenuItem>
            <MenuItem value={'EMU'}>Disney</MenuItem>
            <MenuItem value={'PC'}>HBO</MenuItem>
            <MenuItem value={'Hulu'}>Hulu</MenuItem>
            <MenuItem value={'DVD'}>DVD</MenuItem>
          </Select>
        )}
    </FormControl>
  );
};

export default PlatformType;
