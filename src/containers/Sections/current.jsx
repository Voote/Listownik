import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import video from '../api/video';
import games from '../api/games';
import settings from './settings';
import lastCard from './lastCard';

const api = [...video, ...games];
const collection = api
  .filter((item) => item.finished === 1)
  .sort((a, b) => a.date - b.date)
  .reverse()
  .slice(0, 7);

const data = [...collection, lastCard];

const SectionCurrent = () => (
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

export default SectionCurrent;