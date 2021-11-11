import React from 'react';
import { Box, Grid } from '@mui/material';
// import { sections } from './sectionNames';
import Navbar from '../../components/navbar';
import SectionCard from './card';
import labels from '../../assets/labels';
// import SwipeableTextMobileStepper from '../../components/temporaryCarousel';

const Landing = () => (
  <Box>
    <Navbar />
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
          className="image__logo--desktop"
          src="./IMG/Listownik-Placeholder04.png"
          alt="LISTOWNIK"
        />
      </Grid>
    </Grid>
    <div>
      {/* <div className="layout__line">
        {sections.map((item) => {
          return <h1 key={item.id}>{item.name.toUpperCase()}</h1>;
        })}
      </div> */}
      <div className="layout__line">
        <h1>{labels.placeholderNavNadrobic.toUpperCase()}</h1>
        <div></div>
        <h1>{labels.placeholderNavAktualne.toUpperCase()}</h1>
        <h1>{labels.placeholderNavCommingSoon.toUpperCase()}</h1>
        <h1>{labels.placeholderNavUkonczone.toUpperCase()}</h1>
        <div>
          <SectionCard />
        </div>
      </div>
    </div>
  </Box>
);

export default Landing;
