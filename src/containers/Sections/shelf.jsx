import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from '../../components/settings';

const SectionShelf = ({ data }) => (
  <div className="layout__slider">
    <Slider {...settings}>
      {data.map((item) => (
        <div key={item.id}>
          <img
            src={item.img}
            alt={item.name}
            className="image__tiles"
            style={{ display: 'inline' }}
            //cant change .slick-slide img display: block
          />
          <div>
            <h3>{item.name}</h3>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default SectionShelf;
