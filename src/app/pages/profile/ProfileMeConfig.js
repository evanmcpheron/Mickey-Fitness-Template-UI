import { lazy } from 'react';

const ProfileApp = lazy(() => import('./ProfilePage'));

const ProfileMeConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'profile/me',
      element: <ProfileApp />,
    },
  ],
};

export default ProfileMeConfig;
