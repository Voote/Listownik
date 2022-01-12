import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from '../../components/settings';
import lastCard from './lastCard';
import SectionModal from './modal';

const SectionFinished = ({ api, data }) => {
  const [openCollectionModal, setOpen] = useState(false);
  const handleOpenCollectionModal = () => setOpen(true);
  const handleCloseCollectionModal = () => setOpen(false);

  return (
    <div className="layout__slider">
      <SectionModal
        open={openCollectionModal}
        handleClose={handleCloseCollectionModal}
        data={api || data}
      />

      <Slider {...settings}>
        {data.map((item) => {
          const date = item.date.toString();
          const year = date.slice(0, 4);
          const month = date.slice(4, 6);
          const day = date.slice(6, 8);
          const seen = item.date !== 0 ? `Seen ${day}.${month}.${year}` : `:<`;

          return (
            <div key={item.id}>
              <img src={item.img} alt={item.name} className="image__tiles" />
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

export default SectionFinished;
