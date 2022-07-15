import React, { useState } from 'react';
import CardModal from '../Modal/cardModal';

const ShelfCard = ({ item, seen }) => {
  const [openCardModal, setOpenCardModal] = useState(false);
  const handleOpenCardModal = () => setOpenCardModal(true);
  const handleCloseCardModal = () => setOpenCardModal(false);

  const isCover = item.cover ? item.cover.url : 'IMG/Placeholder.png';
  const when = seen && {
    year: seen.slice(0, 4),
    month: seen.slice(4, 6),
    day: seen.slice(6, 8)
  };
  const dateOfViewing = `Seen ${when.day}.${when.month}.${when.year}`;
  // const dateOfViewing =
  //   seen !== 0 ? `Seen ${when.day}.${when.month}.${when.year}` : `:<`;

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
      <div>
        <h3>{item.name}</h3>
        {seen && <h3>{dateOfViewing}</h3>}
      </div>
    </div>
  );
};

export default ShelfCard;
