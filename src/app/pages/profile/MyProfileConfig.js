import { lazy } from 'react';
import { authRoles } from '../../auth';

const ProfileApp = lazy(() => import('./MyProfile'));

const ProfileUserConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.user,
  routes: [
    {
      path: 'my-profile',
      element: <ProfileApp />,
    },
  ],
};

export default ProfileUserConfig;
