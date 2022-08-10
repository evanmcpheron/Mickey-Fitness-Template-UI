import { Button, Modal, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import AddCard from './addCard/AddCard';

const PaymentInformation = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {}, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '95%', sm: '90%', md: '85%', lg: '50%' },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Card</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <AddCard open={open} setOpen={setOpen} />
        </Paper>
      </Modal>
    </div>
  );
};

export default PaymentInformation;
