import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { videoCommingApi, videoCommingCollection } from './comming';
import { videoCurrentApi, videoCurrentCollection } from './current';
import { ApiContext } from '../../APIValidation';
// import { videoFinishedApi, videoFinishedCollection } from './finished';
// import { videoToDoApi, videoToDoCollection } from './todo';
// import SectionFinished from '../Sections/finished';
import SectionShelf from '../Sections/shelf';
import labels from '../../assets/labels';
import ShelfCMS from '../Sections/shelfCms';
import FinishedCMS from '../Sections/finishedCms';
import { useToDoApi } from './videoData';

const Movies = () => {
  const { videoApi } = useContext(ApiContext);

  console.log(useToDoApi(videoApi));

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
            <ShelfCMS api={videoApi} />
            {/* <SectionShelf data={videoToDoCollection} api={videoToDoApi} /> */}
          </div>
          <h1 className="labels__dark">
            {labels.placeholderNavAktualne.toUpperCase()}
          </h1>
          <div>
            <SectionShelf data={videoCurrentCollection} api={videoCurrentApi} />
          </div>
          <h1 className="labels__dark">
            {labels.placeholderNavCommingSoon.toUpperCase()}
          </h1>
          <div>
            <SectionShelf data={videoCommingCollection} api={videoCommingApi} />
          </div>
          <h1 className="labels__dark">
            {labels.placeholderNavUkonczone.toUpperCase()}
          </h1>
          <div>
            <FinishedCMS api={videoApi} />
            {/* <SectionFinished
              data={videoFinishedCollection}
              api={videoFinishedApi}
            /> */}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Movies;
