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
      path: 'profile/:userId',
      element: <ProfileApp />,
    },
  ],
};

export default ProfileUserConfig;
