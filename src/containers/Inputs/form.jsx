import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  TextField,
  Typography
} from '@mui/material/';
import ProgressType from './progressType';
import PlatformType from './platformType';
import PosterType from './posterType';
import PartNumber from './partNumber';
import Year from './year';

const ModalForm = ({ open, handleClose }) => {
  const [progressType, setProgressType] = useState('');
  const [partNumber, setPartNumber] = useState('1');
  const [posterType, setPosterType] = useState('');
  const [platform, setPlatform] = useState('');
  const [year, setYear] = useState('2022');
  //   const [date, setDate] = useState('2022');
  const handleProgressType = (event) => setProgressType(event.target.value);
  const handlePosterType = (event) => setPosterType(event.target.value);
  const handlePartNumber = (event) => setPartNumber(event.target.value);
  const handlePlatformType = (event) => setPlatform(event.target.value);
  const handleYearChange = (event) => setYear(event.target.value);
  //   const handleDateChange = (event) => setDate(event.target.value);

  let newPoster = {
    id: 123,
    progressType: progressType,
    partNumber: partNumber,
    posterType: posterType,
    platform: platform,
    year: year,
    date: ''
  };
  const showObject = () => console.log(newPoster);

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
            <PosterType
              handleChange={handlePosterType}
              posterType={posterType}
            />
            <PartNumber
              handleChange={handlePartNumber}
              partNumber={partNumber}
            />
          </div>
          <div>
            <PlatformType
              handleChange={handlePlatformType}
              posterType={posterType}
              platform={platform}
            />
            <Year handleChange={handleYearChange} year={year} />
          </div>
          <ProgressType
            handleChange={handleProgressType}
            progressType={progressType}
          />
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
          <Button variant="outlined" color="primary" onClick={showObject}>
            Show
          </Button>
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
