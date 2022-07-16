import React from 'react';
import { Grid, Modal } from '@mui/material';
import { bigFirstLetter } from '../../components/helpers';
import labels from '../../assets/labels';

const CardModal = ({ open, handleClose, item }) => {
  const isImg =
    item.img || (item.cover ? item.cover.url : 'IMG/Placeholder.png');

  const wikiLabel = `${item.name} wiki`;
  const isWiki = item.wiki ? (
    <a
      href={item.wiki}
      className="labels__link"
      target="_blank"
      rel="noreferrer"
    >
      <h4>{wikiLabel.toUpperCase()}</h4>
    </a>
  ) : (
    <p>
      {labels.modalNoWiki}
      {item.name}
    </p>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="modal"
      style={{ backgroundImage: `url(${item.cover.url})` }}
    >
      <Grid container className="modal__card modal--background">
        <button className="modal__exit" onClick={handleClose}>
          {labels.modalCloseButton}
        </button>
        <Grid item xs={12} sm={7} md={4} className="layout__grid--central">
          <img src={isImg} alt={item.name} className="image__tiles--modal" />
        </Grid>
        <Grid item xs={6} sm={4} className="modal__content">
          <h2>{item.name}</h2>
          <h3>
            {labels.modalReleased}
            {item.releaseYear} on {bigFirstLetter(item.platform)}
          </h3>
          <h3>
            {labels.modalSeenAt}
            {item.when.slice(6, 8)}/{item.when.slice(4, 6)}/
            {item.when.slice(0, 4)}
          </h3>
          <h2>{item.name}</h2>
          <h3>
            {labels.modalReleased}
            {item.releaseYear} on {bigFirstLetter(item.platform)}
          </h3>
          <h3>
            {labels.modalSeenAt}
            {item.when.slice(6, 8)}/{item.when.slice(4, 6)}/
            {item.when.slice(0, 4)}
          </h3>
          {isWiki}
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CardModal;
