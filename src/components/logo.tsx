import React, {ReactElement, FC} from 'react';
import { Grid } from '@mui/material';

const Logo: FC<any> = (): ReactElement => (
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
        className="image__logo"
        src="./IMG/Listownik-Placeholder04.png"
        alt="LISTOWNIK"
      />
    </Grid>
  </Grid>
);

export default Logo;
