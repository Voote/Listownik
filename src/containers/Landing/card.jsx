import React from 'react';
import { Grid } from '@mui/material';
import video from '../api/video';

const SectionCard = () => (
  <div>
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      {video.map((item) => {
        return (
          <Grid item xs={12} md={6} lg={3} key={item.id}>
            <img src={item.img} alt={item.name} className="image__tiles" />
            <h3>Watched {item.when}</h3>
            <h3>{item.name}</h3>
          </Grid>
        );
      })}
    </Grid>
    {/* <div
      style={{
        backgroundColor: '#ffd111',
        padding: '1em',
        marginRight: '20%',
        marginLeft: '20%'
      }}
    >
      <div>Yellow</div>
    </div> */}
  </div>
);

export default SectionCard;
