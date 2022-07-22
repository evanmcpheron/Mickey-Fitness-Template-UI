import Coaches from './CoachesPage';

const CoachesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/coaches',
      element: <Coaches />,
    },
  ],
};

export default CoachesConfig;
