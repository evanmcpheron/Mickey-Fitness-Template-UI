import { lazy } from 'react';

const Terms = lazy(() => import('./Terms'));

const TermsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'terms',
      element: <Terms />,
    },
  ],
};

export default TermsConfig;
