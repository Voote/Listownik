import React, { useState } from 'react';
import CardModal from '../Modal/cardModal';

const ShelfCard = ({ item, date }) => {
  const [openCardModal, setOpenCardModal] = useState(false);
  const handleOpenCardModal = () => setOpenCardModal(true);
  const handleCloseCardModal = () => setOpenCardModal(false);

  const year = date && date.slice(0, 4);
  const month = date && date.slice(4, 6);
  const day = date && date.slice(6, 8);
  const seen = date !== 0 ? `Seen ${day}.${month}.${year}` : `:<`;
  const isCover = item.cover ? item.cover.url : 'IMG/Placeholder.png';

  return (
    <div key={item.id}>
      <CardModal
        open={openCardModal}
        handleClose={handleCloseCardModal}
        item={item}
      />
      <img
        src={isCover}
        alt={item.name}
        className="image__tiles"
        onClick={handleOpenCardModal}
      />
      {date ? (
        <div>
          <h3>{item.name}</h3>
          <h3>{seen}</h3>
        </div>
      ) : (
        <div>
          <h3>{item.name}</h3>
        </div>
      )}
    </div>
  );
};

export default ShelfCard;
