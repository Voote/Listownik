import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import video from '../containers/api/video';
import games from '../containers/api/games';

const seen = [...video, ...games];

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

const data = seen
  .sort((a, b) => a.date - b.date)
  .reverse()
  .slice(0, 7);

const SectionCard = () => (
  <div className="layout__slider">
    <Slider {...settings}>
      {data.map((item) => {
        const date = item.date.toString();
        const year = date.slice(0, 4);
        const month = date.slice(4, 6);
        const day = date.slice(6, 8);

        return (
          <div key={item.id}>
            <img
              src={item.img}
              alt={item.name}
              className="image__tiles"
              style={{ display: 'inline' }}
              //cant change .slick-slide img display: block
            />
            {/* <div className="design__poster"> */}
            <div>
              <h3>{item.name}</h3>
              <h3>
                Seen {day}.{month}.{year}
              </h3>
            </div>
          </div>
        );
      })}
    </Slider>
  </div>
);

export default SectionCard;
