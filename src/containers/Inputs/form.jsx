import React, { useState } from 'react';
import moment from 'moment';
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
import PosterIdSelector from './posterIdSelector';
import DatePicker from '@mui/lab/DatePicker';
import PlatformType from './platformType';
import ProgressType from './progressType';
import PartNumber from './partNumber';
import PosterType from './posterType';
import labels from '../../assets/labels';

const ModalForm = ({ open, handleClose }) => {
  const [progressType, setProgressType] = useState('');
  const [partNumber, setPartNumber] = useState('1');
  const [posterType, setPosterType] = useState('');
  const [posterName, setPosterName] = useState('');
  const [releaseYear, setYear] = useState(null);
  const [platform, setPlatform] = useState('');
  const [date, setDate] = useState(null);
  const handleProgressType = (event) => setProgressType(event.target.value);
  const handlePlatformType = (event) => setPlatform(event.target.value);
  const handlePosterType = (event) => setPosterType(event.target.value);
  const handlePosterName = (event) => setPosterName(event.target.value);
  const handlePartNumber = (event) => setPartNumber(event.target.value);
  const handleYearChange = (newValue) => setYear(newValue);
  const handleDateChange = (newValue) => setDate(newValue);
  const newPoster = {
    id: PosterIdSelector(posterType),
    progressType: progressType,
    partNumber: partNumber,
    posterName: posterName,
    posterType: posterType,
    platform: platform,
    releaseYear: releaseYear ? releaseYear.format('YYYY') : '',
    date: date ? date.format('L') : ''
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
            {labels.formModalHeader}
          </Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { width: '25ch', mb: 2 }
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
              label={labels.formSectionType}
            />
            <PlatformType
              handleChange={handlePlatformType}
              posterType={posterType}
              platform={platform}
              label={labels.formSectionPlatform}
            />
          </div>
          <div>
            <DatePicker
              className="input__autofill"
              views={['year']}
              label={labels.formSectionReleaseYear}
              value={releaseYear}
              minDate={moment('1950')}
              maxDate={moment('2025')}
              onChange={handleYearChange}
              renderInput={(params) => (
                <TextField {...params} sx={{ width: '12.5vw' }} />
              )}
            />
            <PartNumber
              handleChange={handlePartNumber}
              partNumber={partNumber}
              label={labels.formSectionPart}
            />
          </div>
          <ProgressType
            handleChange={handleProgressType}
            progressType={progressType}
            label={labels.formSectionProgress}
          />
          <div>
            <DatePicker
              label={labels.formSectionInteraction}
              value={date}
              minDate={moment('2007')}
              maxDate={moment('2025')}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField {...params} sx={{ width: '19.5vw' }} />
              )}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="primary" onClick={showObject}>
            {labels.formShowButton}
          </Button>
          <Button
            sx={{ ml: 4 }}
            variant="contained"
            color="primary"
            onClick={handleClose}
          >
            {labels.formCloseButton}
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default ModalForm;
