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
import DatePicker from '@mui/lab/DatePicker';
import PosterIdSelector from './posterIdSelector';
import ProgressType from './progressType';
import PlatformType from './platformType';
import PosterType from './posterType';
import PartNumber from './partNumber';
import Year from './year';

const ModalForm = ({ open, handleClose }) => {
  const [date, setDate] = useState(null);
  const [progressType, setProgressType] = useState('');
  const [partNumber, setPartNumber] = useState('1');
  const [posterType, setPosterType] = useState('');
  const [posterName, setPosterName] = useState('');
  const [platform, setPlatform] = useState('');
  const [releaseYear, setYear] = useState('2022');
  //   const [date, setDate] = useState('2022');
  const handleProgressType = (event) => setProgressType(event.target.value);
  const handleDateChange = (newValue) => setDate(newValue);
  const handlePlatformType = (event) => setPlatform(event.target.value);
  const handlePosterType = (event) => setPosterType(event.target.value);
  const handlePosterName = (event) => setPosterName(event.target.value);
  const handlePartNumber = (event) => setPartNumber(event.target.value);
  const handleYearChange = (event) => setYear(event.target.value);
  //   const handleDateChange = (event) => setDate(event.target.value);

  const newPoster = {
    id: PosterIdSelector(posterType),
    progressType: progressType,
    partNumber: partNumber,
    posterName: posterName,
    posterType: posterType,
    platform: platform,
    releaseYear: releaseYear,
    date: date ? date.format('L') : date
  };
  const showObject = () => console.log(newPoster);

  return (
    <Modal open={open} className="modal modal__centered">
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
            <TextField
              id="basic-form"
              label="Title"
              variant="filled"
              onChange={handlePosterName}
            />
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
            <Year handleChange={handleYearChange} year={releaseYear} />
          </div>
          <ProgressType
            handleChange={handleProgressType}
            progressType={progressType}
          />
          <div>
            <DatePicker
              label="Basic example"
              value={date}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
            {/* <DatePicker
              views={['year']}
              label="Year only"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            /> */}
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
            Close form
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default ModalForm;
