import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { ApiContext } from '../../ApiValidation';
import ShelfContainer from '../Sections/shelfContainer';
import Logo from '../Sections/logo';

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
