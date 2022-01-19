import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Fab,
  Modal,
  Typography
} from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';

const AddButton = () => {
  const [opennModal, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  const Formularz = () => (
    <Modal
      open={opennModal}
      onClose={handleCloseModal}
      className="modal modal--placeholder"
    >
      <Card sx={{ minWidth: 275, height: 300 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleCloseModal}>
            Hello World
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Formularz />
      <Fab color="primary" aria-label="add" onClick={handleOpenModal}>
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default AddButton;
