import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from '../../components/settings';

const SectionFinished = ({ data }) => (
  <div className="layout__slider">
    <Slider {...settings}>
      {data.map((item) => {
        const date = item.date.toString();
        const year = date.slice(0, 4);
        const month = date.slice(4, 6);
        const day = date.slice(6, 8);
        const seen = item.date !== 0 ? `Seen ${day}.${month}.${year}` : `^^`;

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
              <h3>{seen}</h3>
            </div>
          </div>
        );
      })}
    </Slider>
  </div>
);

export default SectionFinished;
