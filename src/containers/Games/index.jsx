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

const Games = () => {
  const { gamesApi } = useContext(ApiContext);

  return (
    <Box>
      <Logo />
      <div>
        <div className="layout__line">
          <h1 className="labels__dark">
            {labels.placeholderNavCatchUp.toUpperCase()}
          </h1>
          <div>
            <Shelf api={useToDoApi(gamesApi)} />
          </div>
          <h1 className="labels__dark">
            {labels.placeholderNavAktualne.toUpperCase()}
          </h1>
          <div>
            <Shelf api={useCurrentApi(gamesApi)} />
          </div>
          <h1 className="labels__dark">
            {labels.placeholderNavCommingSoon.toUpperCase()}
          </h1>
          <div>
            <Shelf api={useCommingSoonApi(gamesApi)} />
          </div>
          <h1 className="labels__dark">
            {labels.placeholderNavUkonczone.toUpperCase()}
          </h1>
          <div>
            <FinishedSection api={useFinishedApi(gamesApi)} />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Games;
