import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from '../../components/settings';
import lastCard from './lastCard';

const SectionShelf = ({ data }) => {
  const collection = [...data, lastCard];
  return (
    <div className="layout__slider">
      <Slider {...settings}>
        {collection.map((item) => (
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
};

export default SectionShelf;
