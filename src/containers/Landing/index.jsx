import React from 'react';
import { Box, Grid } from '@mui/material';
import SectionComming from '../Sections/comming';
import SectionCurrent from '../Sections/current';
import SectionFinished from '../Sections/finished';
import SectionToDo from '../Sections/todo';
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
        <h1>{labels.placeholderNavNadrobic.toUpperCase()}</h1>
        <div>
          <SectionToDo />
        </div>
        <h1>{labels.placeholderNavAktualne.toUpperCase()}</h1>
        <div>
          <SectionCurrent />
        </div>
        <h1>{labels.placeholderNavCommingSoon.toUpperCase()}</h1>
        <div>
          <SectionComming />
        </div>
        <h1>{labels.placeholderNavUkonczone.toUpperCase()}</h1>
        <div>
          <SectionFinished />
        </div>
      </div>
    </div>
  </Box>
);

export default Landing;
