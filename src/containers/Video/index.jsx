import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { ApiContext } from '../../ApiValidation';
import ShelfComponent from '../Sections/shelfComponent';
import Logo from '../Sections/logo';

const Movies = () => {
  const { videoApi } = useContext(ApiContext);

  return (
    <Box>
      <Logo />
      <ShelfComponent api={videoApi} />
    </Box>
  );
};

export default Movies;
