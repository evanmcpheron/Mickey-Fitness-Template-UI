import { lazy } from 'react';

const ProfileApp = lazy(() => import('./ProfilePage'));

const ProfileUserConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'profile',
      element: <ProfileApp />,
    },
  ],
};

export default ProfileUserConfig;
