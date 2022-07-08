import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { ApiContext } from '../../ApiValidation';
import ShelfComponent from '../Sections/shelfComponent';
import Logo from '../Sections/logo';

const Landing = () => {
  const { gamesApi, videoApi } = useContext(ApiContext);
  const combinedApi = gamesApi.concat(videoApi);

  return (
    <Box>
      <Logo />
      <ShelfComponent api={combinedApi} />
    </Box>
  );
};

export default Landing;
