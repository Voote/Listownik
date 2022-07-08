import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { ApiContext } from '../../APIValidation';
// import { videoCommingApi, videoCommingCollection } from './comming';
// import { videoCurrentApi, videoCurrentCollection } from './current';
// import { videoFinishedApi, videoFinishedCollection } from './finished';
// import { videoToDoApi, videoToDoCollection } from './todo';
// import SectionFinished from '../Sections/finished';
// import SectionShelf from '../Sections/shelf';
import labels from '../../assets/labels';
import ShelfCMS from '../Sections/shelfCms';
import FinishedCMS from '../Sections/finishedCms';
import {
  useCommingSoonVideoApi,
  useCurrentVideoApi,
  useFinishedVideoApi,
  useToDoVideoApi
} from './videoData';

const Movies = () => {
  const { videoApi } = useContext(ApiContext);

  return (
    <Box>
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
            className="image__logo--dimensions"
            src="./IMG/Listownik-Placeholder04.png"
            alt="LISTOWNIK"
          />
        </Grid>
      </Grid>
      <div>
        <div className="layout__line">
          <h1 className="labels__dark">
            {labels.placeholderNavCatchUp.toUpperCase()}
          </h1>
          <div>
            <ShelfCMS api={useToDoVideoApi(videoApi)} />
          </div>
          <h1 className="labels__dark">
            {labels.placeholderNavAktualne.toUpperCase()}
          </h1>
          <div>
            <ShelfCMS api={useCurrentVideoApi(videoApi)} />
          </div>
          <h1 className="labels__dark">
            {labels.placeholderNavCommingSoon.toUpperCase()}
          </h1>
          <div>
            <ShelfCMS api={useCommingSoonVideoApi(videoApi)} />
          </div>
          <h1 className="labels__dark">
            {labels.placeholderNavUkonczone.toUpperCase()}
          </h1>
          <div>
            <FinishedCMS api={useFinishedVideoApi(videoApi)} />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Movies;
