import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from './settings';
import lastCard from './lastCard';
import SectionModal from '../Modal';

const Shelf = ({ api }) => {
  const [openCollectionModal, setOpen] = useState(false);
  const handleOpenCollectionModal = () => setOpen(true);
  const handleCloseCollectionModal = () => setOpen(false);

  const sliderItems = api.slice(0, 7);

  return (
    <div className="layout__slider">
      <SectionModal
        open={openCollectionModal}
        handleClose={handleCloseCollectionModal}
        api={api}
      />
      <Slider {...settings}>
        {sliderItems.map((item) => {
          const isCover = item.cover ? item.cover.url : 'IMG/Placeholder.png';
          return (
            <div key={item.id}>
              <img src={isCover} alt={item.name} className="image__tiles" />
              <div>
                <h3>{item.name}</h3>
              </div>
            </div>
          );
        })}
        <div onClick={handleOpenCollectionModal}>
          <img
            src={lastCard.img}
            alt={lastCard.name}
            className="image__tiles"
          />
          <div>
            <h3>{lastCard.name}</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Shelf;
