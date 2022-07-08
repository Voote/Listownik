import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { ApiContext } from '../../APIValidation';
import {
  useCommingSoonApi,
  useCurrentApi,
  useToDoApi
} from '../api/apiReducers';
import FinishedSection from '../Sections/finishedSection';
import Shelf from '../Sections/shelf';
import Logo from '../Sections/logo';
import labels from '../../assets/labels';

const Landing = () => {
  const { gamesApi, videoApi } = useContext(ApiContext);
  const combinedApi = gamesApi.concat(videoApi);

  return (
    <Box>
      <Logo />
      <div>
        <div className="layout__line">
          <h1 className="labels__dark">
            {labels.placeholderNavCatchUp.toUpperCase()}
          </h1>
          <div>
            <Shelf api={useToDoApi(combinedApi)} />
          </div>
          <h1 className="labels__dark">
            {labels.placeholderNavAktualne.toUpperCase()}
          </h1>
          <div>
            <Shelf api={useCurrentApi(combinedApi)} />
          </div>
          <h1 className="labels__dark">
            {labels.placeholderNavCommingSoon.toUpperCase()}
          </h1>
          <div>
            <Shelf api={useCommingSoonApi(combinedApi)} />
          </div>
          <h1 className="labels__dark">
            {labels.placeholderNavUkonczone.toUpperCase()}
          </h1>
          <div>
            <FinishedSection api={combinedApi} />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Landing;
