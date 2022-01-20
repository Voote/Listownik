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
  Select,
  TextField,
  Typography
} from '@mui/material/';
import { partOptions } from './partOptions';

const ModalForm = ({ open, handleClose }) => {
  const [posterType, setPosterType] = useState('');
  const [partNumber, setPartNumber] = useState('1');

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
