import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { ApiContext } from '../../DataProvider';
import ShelfContainer from '../Sections/shelfContainer';
import Logo from '../Sections/logo';

const Videos = () => {
  const { videoApi } = useContext(ApiContext);

  return (
    <Box>
      <Logo />
      <ShelfContainer api={videoApi} />
    </Box>
  );
};

export default Videos;
