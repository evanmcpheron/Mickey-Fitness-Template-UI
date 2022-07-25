import Avatar from '@mui/material/Avatar';
import { s3Proxy } from '../../helper/proxy';

const UserAvatar = ({ user, sx, className, alt, ...props }) => {
  if (user.data.photoURL === 'default-profile.jpg') {
    return (
      <Avatar
        sx={sx}
        className={className}
        src={`${s3Proxy()}/user/${user.data.photoURL}`}
        alt="User avatar"
      />
    );
  }
  return (
    <Avatar
      sx={sx}
      className={className}
      src={`${s3Proxy()}/user/${user.uuid}/${user.data.photoURL}`}
      alt="User avatar"
    />
  );
};

export default UserAvatar;
