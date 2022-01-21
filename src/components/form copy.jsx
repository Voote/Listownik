import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  NativeSelect,
  Radio,
  Select,
  TextField,
  Typography
} from '@mui/material/';
import {
  AdapterDateFns,
  DatePicker,
  LocalizationProvider,
  Stack
} from '@mui/lab/';
import DateAdapter from '@mui/lab/AdapterDayjs';
import { partOptions } from './partOptions';

const ModalForm = ({ open, handleClose }) => {
  const [posterType, setPosterType] = useState('');
  const [partNumber, setPartNumber] = useState('1');
  const [value, setValue] = useState(new Date());

  const handlePosterType = (event) => setPosterType(event.target.value);
  const handlePartNumber = (event) => setPartNumber(event.target.value);

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

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DatePicker
                views={['year']}
                label="Year only"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </Stack>
          </LocalizationProvider>

          <Typography>
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClose}>
            Hello World
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default ModalForm;

import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';

export const ColorRadioButtons = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item }
  });

  return (
    <div>
      <Radio {...controlProps('a')} />
      <Radio {...controlProps('b')} color="secondary" />
      <Radio {...controlProps('c')} color="success" />
      <Radio {...controlProps('d')} color="default" />
      <Radio
        {...controlProps('e')}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600]
          }
        }}
      />
    </div>
  );
};
