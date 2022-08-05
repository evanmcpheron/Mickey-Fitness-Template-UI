import { lazy } from 'react';
import { authRoles } from '../../auth';

const SettingsTab = lazy(() => import('./SettingsPage'));

const SettingsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.user,
  routes: [
    {
      path: 'settings',
      element: <SettingsTab />,
    },
  ],
};

export default SettingsConfig;
