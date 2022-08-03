import { lazy } from 'react';

const Privacy = lazy(() => import('./Privacy'));

const PrivacyConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'privacy',
      element: <Privacy />,
    },
  ],
};

export default PrivacyConfig;
