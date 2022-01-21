import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Modal,
  NativeSelect,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from '@mui/material/';
import { partOptions, yearOptions } from './partOptions';

const ModalForm = ({ open, handleClose }) => {
  const [posterType, setPosterType] = useState('');
  const [platform, setPlatform] = useState('');
  const [partNumber, setPartNumber] = useState('1');
  const [year, setYear] = useState('2022');
  const [date, setDate] = useState('2022');
  const [progress, setProgress] = useState('');

  const handlePosterType = (event) => setPosterType(event.target.value);
  const handlePartNumber = (event) => setPartNumber(event.target.value);
  const handlePlatformType = (event) => setPlatform(event.target.value);
  const handleYearChange = (event) => setYear(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleProgressType = (event) => setProgress(event.target.value);

  return (
    <Modal open={open} className="modal">
      <Card className="modal__size modal--second">
        <CardContent>
          <Typography
            sx={{ fontSize: 20, textAlign: 'center' }}
            color="primary"
            gutterBottom
          >
            Add new Poster
          </Typography>

          <Box
            component="form"
            sx={{
              '& > :not(style)': { width: '24ch', mb: 2 }
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="basic-form" label="Title" variant="filled" />
          </Box>

          <div>
            <FormControl sx={{ minWidth: 100, mb: 1 }}>
              <InputLabel id="type-select-label">Type</InputLabel>
              <Select
                labelId="type-select-label"
                id="type-select"
                value={posterType}
                onChange={handlePosterType}
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
            <FormControl sx={{ minWidth: 50, mb: 1, ml: 7 }}>
              <InputLabel id="part-select-label">Part</InputLabel>
              <NativeSelect
                inputProps={{
                  name: 'Party',
                  id: 'part-select'
                }}
                value={partNumber}
                onChange={handlePartNumber}
              >
                {partOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </div>
          <div>
            <FormControl sx={{ minWidth: 110, mb: 1 }}>
              <InputLabel id="platform-select-label">Platform</InputLabel>
              <Select
                labelId="platform-select-label"
                id="platform-select"
                value={platform}
                onChange={handlePlatformType}
                autoWidth
                label="platform"
              >
                <MenuItem value={'PS4'}>PS4</MenuItem>
                <MenuItem value={'NS'}>Switch</MenuItem>
                <MenuItem value={'STI'}>Stadia</MenuItem>
                <MenuItem value={'EMU'}>Emulator</MenuItem>
                <MenuItem value={'PC'}>PC</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 50, mb: 1, ml: 4 }}>
              <InputLabel id="year-select-label">Year</InputLabel>
              <NativeSelect
                inputProps={{
                  name: 'Year',
                  id: 'year-select'
                }}
                value={year}
                onChange={handleYearChange}
              >
                {yearOptions.reverse().map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </div>
          <FormControl>
            <FormLabel id="progress-radio-buttons-group-label">
              Progress
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="progress-radio-buttons-group-label"
              name="progress-buttons-group"
            >
              <FormControlLabel value="seen" control={<Radio />} label="Seen" />
              <FormControlLabel value="now" control={<Radio />} label="Now" />
              <FormControlLabel value="todo" control={<Radio />} label="ToDo" />
            </RadioGroup>
          </FormControl>
          <div>
            {/* <FormControl sx={{ minWidth: 50, mb: 1 }}>
              <InputLabel id="date-select-label">Date</InputLabel>
              <NativeSelect
                inputProps={{
                  name: 'Date',
                  id: 'date-select'
                }}
                value={date}
                onChange={handleDateChange}
              >
                {yearOptions.reverse().map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </NativeSelect>
            </FormControl> */}
          </div>
        </CardContent>
        <CardActions>
          <Button
            sx={{ ml: 4 }}
            variant="contained"
            color="primary"
            onClick={handleClose}
          >
            Click here to close
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default ModalForm;
