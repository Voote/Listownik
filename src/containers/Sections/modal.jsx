import React from 'react';
import { Grid, Modal } from '@mui/material';

const SectionModal = ({ open, handleClose, api }) => (
  <Modal open={open} onClose={handleClose} className="modal modal--placeholder">
    <Grid container>
      <button className="modal__exit" onClick={handleClose}>
        CLOSE MODAL
      </button>
      {api.map((item) => (
        <Grid item key={item.id} sm={10} md={6} lg={4}>
          <img src={item.img} alt={item.name} className="image__tiles" />
          <div>
            <h3>{item.name}</h3>
          </div>
        </Grid>
      ))}
      <Grid item lg={2}>
        <div>Jakis tekst</div>
      </Grid>
    </Grid>
  </Modal>
);

export default SectionModal;
