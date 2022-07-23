import { motion } from 'framer-motion';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { s3Proxy } from '../../helper/proxy';
import Ratings from '../../theme/shared-components/Ratings';

const ProfileHeader = ({ user, selectedTab, setSelectedTab }) => {
  console.log('🚀 ~ file: ProfileHeader.js ~ line 11 ~ user: ', user);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }
  return (
    <div className="flex flex-col">
      <img
        className="h-160 lg:h-320 object-cover w-full"
        src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Profile Cover"
      />

      <div className="flex flex-col flex-0 lg:flex-row items-center max-w-5xl w-full mx-auto px-32 lg:h-72">
        <div className="-mt-96 lg:-mt-88 rounded-full">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.1 } }}>
            <Avatar
              sx={{ borderColor: 'background.paper' }}
              className="w-128 h-128 border-4"
              src={`${s3Proxy()}${user.data.photoURL}`}
              alt="User avatar"
            />
          </motion.div>
        </div>

        <div className="flex flex-col items-center lg:items-start mt-16 lg:mt-0 lg:ml-32">
          <Typography className="text-lg font-bold leading-none">Brian Hughes</Typography>
          <Typography color="text.secondary">London, UK</Typography>
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
                label="SETTINGS"
              />
            ) : null}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
