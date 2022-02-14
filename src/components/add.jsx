import React, { useState } from 'react';
import { Box, Fab } from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';
import ModalForm from '../containers/Inputs/form';

const AddButton = () => {
  const [opennModal, setOpen] = useState(false);
  const [counter, increaseCounter] = useState(1);
  const handleCloseModal = () => setOpen(false);
  const handleOpenModal = () => {
    setOpen(true);
    increaseCounter(counter + 1);
  };
  const generateKey = () => {
    return new Date().getTime();
  };

  return (
    <Box>
      <ModalForm
        open={opennModal}
        handleClose={handleCloseModal}
        key={generateKey() + counter}
      />
      <Fab color="secondary" aria-label="add" onClick={handleOpenModal}>
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default AddButton;
