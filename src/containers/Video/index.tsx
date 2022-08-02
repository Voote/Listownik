import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { ApiContext } from '../../DataProvider';
import ShelfContainer from '../Sections/shelfContainer';
import Logo from '../../components/logo';

const Videos = () => {
  const { videoApi }: any = useContext(ApiContext);

  return (
    <Box>
      <Logo />
      <ShelfContainer api={videoApi} />
    </Box>
  );
};

export default Videos;
