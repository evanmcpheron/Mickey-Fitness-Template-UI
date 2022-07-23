import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import { useParams } from 'react-router-dom';
import AboutTab from './tabs/AboutTab';
import ReviewTab from './tabs/ReviewTab';
import StoreTab from './tabs/StoreTab';
import useThemeMediaQuery from '../../../@fuse/hooks/useThemeMediaQuery';
import ProfileHeader from './ProfileHeader';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    background:
      theme.palette.mode === 'light'
        ? `${theme.palette.background.paper}`
        : `${theme.palette.background.default}`,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
}));

function ProfilePage() {
  const params = useParams();
  console.log('🚀 ~ file: ProfilePage.js ~ line 27 ~ params: ', params);
  const [selectedTab, setSelectedTab] = useState(0);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  const user = useSelector(selectUser);

  return (
    <Root
      header={
        <ProfileHeader user={user} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      }
      content={
        <div className="flex flex-auto justify-center w-full max-w-5xl mx-auto p-24 sm:p-32">
          {selectedTab === 0 && <StoreTab />}
          {selectedTab === 1 && <AboutTab />}
          {selectedTab === 2 && <ReviewTab />}
        </div>
      }
      scroll={isMobile ? 'normal' : 'page'}
    />
  );
}

export default ProfilePage;
