import React from 'react';
import { Grid, Modal } from '@mui/material';

export const bigFirstLetter = (word) => word[0].toUpperCase() + word.slice(1);

const CardModal = ({ open, handleClose, item }) => {
  const isImg =
    item.img || (item.cover ? item.cover.url : 'IMG/Placeholder.png');

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="modal"
      style={{ backgroundImage: `url(${item.cover.url})` }}
    >
      <Grid container className="modal__card modal--background">
        <button className="modal__exit" onClick={handleClose}>
          CLOSE MODAL
        </button>
        <Grid item xs={10} sm={6} md={4}>
          <img src={isImg} alt={item.name} className="image__tiles" />
        </Grid>
        <Grid item md={2} style={{ textAlign: 'right' }}>
          <h2>{item.name}</h2>
          <h3>
            Relased {item.releaseYear} on {bigFirstLetter(item.platform)}
          </h3>
          <h3>
            Seen at {item.when.slice(6, 8)}/{item.when.slice(4, 6)}/
            {item.when.slice(0, 4)}
          </h3>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CardModal;
