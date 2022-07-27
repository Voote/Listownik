import React from 'react';
import { Grid, Modal } from '@mui/material';
import labels from '../../assets/labels';

const SectionModal = ({ open, handleClose, api }) => (
  <Modal open={open} onClose={handleClose} className="modal modal--placeholder">
    <Grid container>
      <button className="modal__exit modal__exit--section" onClick={handleClose}>
        {labels.modalCloseButton}
      </button>
      {api.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} xl={3}>
          <img
            src={
              item.img || (item.cover ? item.cover.url : 'IMG/Placeholder.png')
            }
            alt={item.name}
            className="image__tiles"
          />
          <div>
            <h3>{item.name}</h3>
          </div>
        </Grid>
      ))}
      <Grid item lg={2}>
        <div>{labels.posterText}</div>
      </Grid>
    </Grid>
  </Modal>
);

export default SectionModal;
