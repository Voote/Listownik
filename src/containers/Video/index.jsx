import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { ApiContext } from '../../APIValidation';
import {
  useCommingSoonApi,
  useCurrentApi,
  useFinishedApi,
  useToDoApi
} from '../api/apiReducers';
import FinishedSection from '../Sections/finishedSection';
import Shelf from '../Sections/shelf';
import Logo from '../Sections/logo';
import labels from '../../assets/labels';

const Movies = () => {
  const { videoApi } = useContext(ApiContext);

  return (
    <Box>
      <Logo />
      <div>
        <div className="layout__line">
          <h1 className="labels__dark">
            {labels.placeholderNavCatchUp.toUpperCase()}
          </h1>
          <div>
            <Shelf api={useToDoApi(videoApi)} />
          </div>
          <h1 className="labels__dark">
            {labels.placeholderNavAktualne.toUpperCase()}
          </h1>
          <div>
            <Shelf api={useCurrentApi(videoApi)} />
          </div>
          <h1 className="labels__dark">
            {labels.placeholderNavCommingSoon.toUpperCase()}
          </h1>
          <div>
            <Shelf api={useCommingSoonApi(videoApi)} />
          </div>
          <h1 className="labels__dark">
            {labels.placeholderNavUkonczone.toUpperCase()}
          </h1>
          <div>
            <FinishedSection api={useFinishedApi(videoApi)} />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Movies;
