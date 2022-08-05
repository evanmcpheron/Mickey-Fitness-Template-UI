import { lazy } from 'react';
import { authRoles } from '../../auth';

const ProfileApp = lazy(() => import('./ProfilePage'));

const ProfileUserConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.user,
  routes: [
    {
      path: 'profile/:userId',
      element: <ProfileApp />,
    },
  ],
};

export default ProfileUserConfig;
