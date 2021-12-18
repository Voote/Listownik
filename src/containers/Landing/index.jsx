import React from 'react';
import { Box, Grid } from '@mui/material';
import SectionCard from '../../components/card';
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
        <h1>{labels.placeholderNavAktualne.toUpperCase()}</h1>
        <h1>{labels.placeholderNavCommingSoon.toUpperCase()}</h1>
        <h1>{labels.placeholderNavUkonczone.toUpperCase()}</h1>
        <div>
          <SectionCard />
        </div>
      </div>
    </div>
  </Box>
);

export default Landing;
