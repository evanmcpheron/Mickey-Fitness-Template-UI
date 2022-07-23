import { lazy } from 'react';

const SettingsTab = lazy(() => import('./SettingsPage'));

const SettingsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'settings',
      element: <SettingsTab />,
    },
  ],
};

export default SettingsConfig;
