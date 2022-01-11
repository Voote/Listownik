import React from 'react';
import { Grid, Modal } from '@mui/material';

const SectionModal = ({ open, handleClose }) => (
  <Modal open={open} onClose={handleClose}>
    <Grid container>
      <Grid item lg={2}>
        <img src="IMG/VeriPeri.png" alt="veri peri" />
      </Grid>
      <Grid item lg={2}>
        <div>Jakis tekst</div>
        <button className="button" onClick={handleClose}>
          CLOSE ME
        </button>
      </Grid>
    </Grid>
  </Modal>
);

export default SectionModal;
