import { lazy } from 'react';

const ProfileApp = lazy(() => import('./ProfilePage'));

const ProfileConfig = {
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

export default ProfileConfig;
