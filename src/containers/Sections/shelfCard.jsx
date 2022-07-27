import React, { useState } from 'react';
import labels from '../../assets/labels';
import { monthChecker } from '../../components/month';
import CardModal from '../Modal/cardModal';

const ShelfCard = ({ item, seen }) => {
  const [openCardModal, setOpenCardModal] = useState(false);
  const handleOpenCardModal = () => setOpenCardModal(true);
  const handleCloseCardModal = () => setOpenCardModal(false);

  const when = seen && {
    year: seen.slice(0, 4),
    month: monthChecker(seen.slice(4, 6)),
    day: seen.slice(6, 8)
  };

  return (
    <div key={item.id}>
      <CardModal
        open={openCardModal}
        handleClose={handleCloseCardModal}
        item={item}
      />
      <img
        src={item.cover.url}
        alt={item.name}
        className="image__tiles"
        onClick={handleOpenCardModal}
      />
      <div>
        <h3>{item.name}</h3>
        {seen && (
          <h3>
            {labels.shelfSeen} {when.day} {when.month} {when.year}
          </h3>
        )}
      </div>
    </div>
  );
};

export default ShelfCard;
