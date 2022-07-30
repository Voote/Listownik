import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { ApiContext } from '../../DataProvider';
import ShelfContainer from '../Sections/shelfContainer';
import Logo from '../../components/logo';

const Games = () => {
  const { gamesApi } = useContext(ApiContext);

  return (
    <Box>
      <Logo />
      <ShelfContainer api={gamesApi} />
    </Box>
  );
};

export default Games;
