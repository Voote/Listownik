import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from './settings';
import lastCard from './lastCard';
import SectionModal from './modal';

const FinishedCMS = ({ api }) => {
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
          const date = item.when.toString();
          const year = date.slice(0, 4);
          const month = date.slice(5, 7);
          const day = date.slice(8, 10);
          const seen = item.when !== 0 ? `Seen ${day}.${month}.${year}` : `:<`;
          const isCover = item.cover ? item.cover.url : 'IMG/Placeholder.png';

          return (
            <div key={item.id}>
              <img src={isCover} alt={item.name} className="image__tiles" />
              {/* <div className="design__poster"> */}
              <div>
                <h3>{item.name}</h3>
                <h3>{seen}</h3>
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

export default FinishedCMS;
