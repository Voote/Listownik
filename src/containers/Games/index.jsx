import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { ApiContext } from '../../ApiValidation';
import ShelfComponent from '../Sections/shelfComponent';
import Logo from '../Sections/logo';

const Games = () => {
  const { gamesApi } = useContext(ApiContext);

  return (
    <Box>
      <Logo />
      <ShelfComponent api={gamesApi} />
    </Box>
  );
};

export default Games;
