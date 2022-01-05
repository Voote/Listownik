import React from 'react';
import { Box, Grid } from '@mui/material';
import videoCommingApi from './comming';
import videoCurrentApi from './current';
import videoFinishedApi from './finished';
import videoToDoApi from './todo';
import SectionShelf from '../Sections/shelf';
import SectionFinished from '../Sections/finished';
import labels from '../../assets/labels';

const Movies = () => (
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
          <SectionShelf data={videoToDoApi} />
        </div>
        <h1 className="labels__dark">
          {labels.placeholderNavAktualne.toUpperCase()}
        </h1>
        <div>
          <SectionShelf data={videoCurrentApi} />
        </div>
        <h1 className="labels__dark">
          {labels.placeholderNavCommingSoon.toUpperCase()}
        </h1>
        <div>
          <SectionShelf data={videoCommingApi} />
        </div>
        <h1 className="labels__dark">
          {labels.placeholderNavUkonczone.toUpperCase()}
        </h1>
        <div>
          <SectionFinished data={videoFinishedApi} />
        </div>
      </div>
    </div>
  </Box>
);

export default Movies;
