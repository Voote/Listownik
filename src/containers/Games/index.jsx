import React from 'react';
import { Box, Grid } from '@mui/material';
import { gamesCommingApi, gamesCommingCollection } from './comming';
import { gamesCurrentApi, gamesCurrentCollection } from './current';
import { gamesFinishedApi, gamesFinishedCollection } from './finished';
import { gamesToDoApi, gamesToDoCollection } from './todo';
import SectionFinished from '../Sections/finished';
import SectionShelf from '../Sections/shelf';
import labels from '../../assets/labels';

const Games = () => (
  <Box>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}></Grid>
      <Grid item xs={1} className="layout__grid--central">
        <img
          className="image__logo--dimensions"
          src="./IMG/Listownik-Placeholder04.png"
          alt="LISTOWNIK"
        />
      </Grid>
    </Grid>
    <div>
      <div className="layout__line">
        <h1 className="labels__dark">
          {labels.placeholderNavCatchUp.toUpperCase()}
        </h1>
        <div>
          <SectionShelf data={gamesToDoCollection} api={gamesToDoApi} />
        </div>
        <h1 className="labels__dark">
          {labels.placeholderNavAktualne.toUpperCase()}
        </h1>
        <div>
          <SectionShelf data={gamesCurrentCollection} api={gamesCurrentApi} />
        </div>
        <h1 className="labels__dark">
          {labels.placeholderNavCommingSoon.toUpperCase()}
        </h1>
        <div>
          <SectionShelf data={gamesCommingCollection} api={gamesCommingApi} />
        </div>
        <h1 className="labels__dark">
          {labels.placeholderNavUkonczone.toUpperCase()}
        </h1>
        <div>
          <SectionFinished
            data={gamesFinishedCollection}
            api={gamesFinishedApi}
          />
        </div>
      </div>
    </div>
  </Box>
);

export default Games;
