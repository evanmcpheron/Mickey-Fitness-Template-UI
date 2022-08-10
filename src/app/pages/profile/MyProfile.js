import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FuseLoading from '@fuse/core/FuseLoading';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import AboutTab from './tabs/AboutTab';
import ReviewTab from './tabs/ReviewTab';
import StoreTab from './tabs/StoreTab';
import useThemeMediaQuery from '../../../@fuse/hooks/useThemeMediaQuery';
import ProfileHeader from './ProfileHeader';
import { proxy } from '../../../@helper/proxy';
import EditTab from './tabs/EditTab';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
}));

const MyProfile = () => {
  const user = useSelector(selectUser);
  const [store, setStore] = useState(null);
  const [selectedTab, setSelectedTab] = useState(
    Number.parseInt(localStorage.getItem('tab'), 10) || 0
  );
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${proxy()}/v1/store/me`)
      .then((res) => {
        setStore(res.data);
      })
      .catch((err) => {
        console.log('🚀 ~ file: StoreTab.js ~ line 16 ~ err: ', err);
      });
  }, []);

  if (user?.role.length === 0) {
    return navigate('/sign-in');
  }

  if (!user) {
    return <FuseLoading />;
  }

  return (
    <Root
      header={
        <ProfileHeader
          user={{ isMe: true, ...user }}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          store={store}
        />
      }
      content={
        <div className="flex flex-auto justify-center w-full h-full mx-auto">
          {selectedTab === 0 && <StoreTab user={{ isMe: true, ...user }} store={store} />}
          {selectedTab === 1 && <AboutTab user={{ isMe: true, ...user }} store={store} />}
          {selectedTab === 2 && <ReviewTab user={{ isMe: true, ...user }} store={store} />}
          {selectedTab === 3 && <EditTab user={{ isMe: true, ...user }} store={store} />}
        </div>
      }
      scroll={isMobile ? 'normal' : 'page'}
    />
  );
};

export default MyProfile;
