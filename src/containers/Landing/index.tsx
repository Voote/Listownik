import { useContext } from 'react';
import { Box } from '@mui/material';
import { ApiContext } from '../../DataProvider';
import ShelfContainer from '../Sections/shelfContainer';
import Logo from '../../components/logo';

const Landing = () => {
  const { gamesApi, videoApi }: any = useContext(ApiContext);
  const combinedApi = gamesApi.concat(videoApi);

  return (
    <Box>
      <Logo />
      <ShelfContainer api={combinedApi} />
    </Box>
  );
};

export default Landing;
