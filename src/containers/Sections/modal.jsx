import React from 'react';
import Modal from '@mui/material';

const SectionModal = ({ open, handleClose }) => (
  <Modal open={open} onClose={handleClose}>
    <div>
      <img src="IMG/VeriPeri.png" alt="veri peri" />
      <div></div>
    </div>
  </Modal>
);

export default SectionModal;
