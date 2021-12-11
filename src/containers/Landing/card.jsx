import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { Grid } from '@mui/material';
import video from '../api/video';

const SectionCard = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="layout__slider">
      <Slider {...settings}>
        {video.map((item) => {
          return (
            <div key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                className="image__tiles"
                style={{ display: 'inline' }}
                //cant change .slick-slide img display: block
              />
              <h3>Watched {item.when}</h3>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </Slider>

      {/* <Grid 
      container 
      spacing={2} 
      alignItems="center" 
      justifyContent="center">
      {video.map((item) => {
        return (
          <Grid item xs={12} md={6} lg={3} key={item.id}>
            <img 
            src={item.img} 
            alt={item.name} 
            className="image__tiles" />
            <h3>Watched {item.when}</h3>
            <h3>{item.name}</h3>
          </Grid>
        );
      })}
    </Grid> */}

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
};

export default SectionCard;
