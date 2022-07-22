import Coaches from './Coahces';

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
