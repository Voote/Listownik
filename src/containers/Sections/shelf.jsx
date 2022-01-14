import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from './settings';
import lastCard from './lastCard';
import SectionModal from './modal';

const SectionShelf = ({ api, data }) => {
  const [openCollectionModal, setOpen] = useState(false);
  const handleOpenCollectionModal = () => setOpen(true);
  const handleCloseCollectionModal = () => setOpen(false);

  return (
    <div className="layout__slider">
      <SectionModal
        open={openCollectionModal}
        handleClose={handleCloseCollectionModal}
        api={api}
      />
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.name} className="image__tiles" />
            <div>
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
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

export default SectionShelf;
