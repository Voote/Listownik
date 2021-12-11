import React from 'react';
import { Box, Grid } from '@mui/material';

const Movies = () => (
  <Box>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={1} className="layout__grid--central">
        <div>
          <p>Movie 1</p>
          <p>Movie 2</p>
          <p>Movie 3</p>
        </div>
      </Grid>
    </Grid>
  </Box>
);

export default Movies;
