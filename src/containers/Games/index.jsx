import React from 'react';
import { Box, Grid } from '@mui/material';

const Games = () => (
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
          <p>Game 1</p>
          <p>Game 2</p>
          <p>Game 3</p>
        </div>
      </Grid>
    </Grid>
  </Box>
);

export default Games;
