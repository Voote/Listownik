import React from 'react';
import { Box, Grid } from '@mui/material';
import allCommingApi from './comming';
import allCurrentApi from './current';
import allFinishedApi from './finished';
import allToDoApi from './todo';
import SectionFinished from '../Sections/finished';
import SectionShelf from '../Sections/shelf';
import labels from '../../assets/labels';

const Landing = () => (
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
          <SectionShelf data={allToDoApi} />
        </div>
        <h1 className="labels__dark">
          {labels.placeholderNavAktualne.toUpperCase()}
        </h1>
        <div>
          <SectionShelf data={allCurrentApi} />
        </div>
        <h1 className="labels__dark">
          {labels.placeholderNavCommingSoon.toUpperCase()}
        </h1>
        <div>
          <SectionShelf data={allCommingApi} />
        </div>
        <h1 className="labels__dark">
          {labels.placeholderNavUkonczone.toUpperCase()}
        </h1>
        <div>
          <SectionFinished data={allFinishedApi} />
        </div>
      </div>
    </div>
  </Box>
);

export default Landing;
