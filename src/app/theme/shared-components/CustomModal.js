import { Modal, Paper } from '@mui/material';

const CustomModal = ({ open, handleClose, title, content }) => {
  return (
    <Modal
      className="w-full flex justify-center items-center"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <Paper className="p-36 flex justify-center items-center flex-col">
          <h2 className="pb-36">{title}</h2>
          {content}
        </Paper>
      </div>
    </Modal>
  );
};

export default CustomModal;
