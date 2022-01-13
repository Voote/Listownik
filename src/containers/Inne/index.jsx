import React from 'react';
import { Box, Grid } from '@mui/material';
import labels from '../../assets/labels';

const Inne = () => (
  <Box>
    <h1 style={{ textAlign: 'center', paddingTop: '1em' }}>PLACEHOLDEROWNIK</h1>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
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
        <h1>{labels.placeholderNavCatchUp.toUpperCase()}</h1>
        <h1>{labels.placeholderNavAktualne.toUpperCase()}</h1>
        <h1>{labels.placeholderNavCommingSoon.toUpperCase()}</h1>
        <h1>{labels.placeholderNavUkonczone.toUpperCase()}</h1>
      </div>
    </div>
  </Box>
);

export default Inne;
