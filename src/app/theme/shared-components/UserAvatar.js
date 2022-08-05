import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { IconButton, Box } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { useState } from 'react';
import { s3Proxy } from '../../../@helper/proxy';
import CustomModal from './CustomModal';

const CustomAvatar = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '100%',
  '& .edit-button': {
    position: 'absolute',
    bottom: 0,
    right: 0,
    '&:hover': {
      pointer: 'cursor',
    },
  },
}));

const UserAvatar = ({ user, sx, className, alt, ...props }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  if (user.data.photoURL === 'default-profile.jpg') {
    return (
      <CustomAvatar className="box-root">
        <CustomModal
          handleClose={handleClose}
          open={open}
          title="Upload Profile Image."
          content={<div>IMAGE UPLOAD GOES HERE</div>}
        />

        <Avatar
          sx={sx}
          className={className}
          src={`${s3Proxy()}/user/${user.data.photoURL}`}
          alt="User avatar"
        />
        {user.isMe ? (
          <IconButton
            color="primary"
            className="edit-button"
            aria-label="upload picture"
            component="label"
            onClick={() => setOpen(true)}
          >
            <PhotoCamera />
          </IconButton>
        ) : null}
      </CustomAvatar>
    );
  }
  return (
    <CustomAvatar className="box-root">
      <CustomModal
        handleClose={handleClose}
        open={open}
        title="Upload Profile Image."
        content={<div>IMAGE UPLOAD GOES HERE</div>}
      />
      <Avatar
        sx={sx}
        className={className}
        src={`${s3Proxy()}/user/${user.uuid}/${user.data.photoURL}`}
        alt="User avatar"
      />
      {user.isMe ? (
        <IconButton
          color="primary"
          className="edit-button"
          aria-label="upload picture"
          component="label"
          onClick={() => setOpen(true)}
        >
          <PhotoCamera />
        </IconButton>
      ) : null}
    </CustomAvatar>
  );
};
export default UserAvatar;
