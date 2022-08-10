import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { get } from 'lodash';
import { s3Proxy } from '../../../@helper/proxy';
import Ratings from '../../theme/shared-components/Ratings';
import UserAvatar from '../../theme/shared-components/UserAvatar';
import CustomModal from '../../theme/shared-components/CustomModal';

const ProfileHeader = ({ user, selectedTab, setSelectedTab, store }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleTabChange = (event, value) => {
    localStorage.setItem('tab', value);
    setSelectedTab(value);
  };

  return (
    <div className="flex flex-col">
      <CustomModal
        handleClose={handleClose}
        open={open}
        title="Upload Profile Image."
        content={<div>IMAGE UPLOAD GOES HERE</div>}
      />
      <div className="relative">
        <img
          className="h-160 lg:h-320 object-cover w-full"
          src={
            user.data.coverPhoto === 'default-cover-photo.png'
              ? `${s3Proxy()}/user/${user.data.coverPhoto}`
              : `${s3Proxy()}/user/${user.uuid}/${user.data.coverPhoto}`
          }
          alt="Profile Cover"
        />
        {user.isMe ? (
          <IconButton
            color="primary"
            className="absolute bottom-0 right-0"
            aria-label="upload picture"
            component="label"
            onClick={() => setOpen(true)}
          >
            <PhotoCamera />
          </IconButton>
        ) : null}
      </div>
      <div className="flex flex-col flex-0 lg:flex-row items-center max-w-5xl w-full mx-auto px-32 lg:h-72">
        <div className="-mt-96 lg:-mt-88 rounded-full">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.1 } }}>
            <UserAvatar
              sx={{ borderColor: 'background.paper' }}
              className="w-128 h-128 border-4"
              user={user}
            />
          </motion.div>
        </div>

        <div className="flex flex-col items-center lg:items-start mt-16 lg:mt-0 lg:ml-32">
          <Typography className="text-lg font-bold leading-none">
            {get(store, 'results.name', false) ? store.results.name : user.data.displayName}
          </Typography>
          <Typography color="text.secondary">{user.data.location}</Typography>
        </div>

        <div className="hidden lg:flex h-32 mx-32 border-l-2" />

        <div className="flex items-center mt-24 lg:mt-0 space-x-24">
          <div className="flex flex-col items-center">
            <Typography className="font-bold">
              <Ratings defaultValue={4.5} />
            </Typography>
            <Typography className="text-sm font-medium" color="text.secondary">
              (4.7) STARS
            </Typography>
          </div>
          <div className="flex flex-col items-center">
            <Typography className="font-bold">1.2k</Typography>
            <Typography className="text-sm font-medium" color="text.secondary">
              REVIEWS
            </Typography>
          </div>
        </div>

        <div className="flex flex-1 justify-end my-16 lg:my-0">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="inherit"
            variant="scrollable"
            scrollButtons={false}
            className="-mx-4 min-h-40"
            classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
            TabIndicatorProps={{
              children: (
                <Box
                  sx={{ bgcolor: 'text.disabled' }}
                  className="w-full h-full rounded-full opacity-20"
                />
              ),
            }}
          >
            <Tab
              className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
              disableRipple
              label="STORE"
            />
            <Tab
              className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
              disableRipple
              label="ABOUT"
            />
            <Tab
              className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
              disableRipple
              label="REVIEWS"
            />
            {user.isMe ? (
              <Tab
                className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
                disableRipple
                label="EDIT PROFILE"
              />
            ) : null}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
