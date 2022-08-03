import CreateCoach from './CreateCoach';

const CreateCoachConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/create/coach',
      element: <CreateCoach />,
    },
  ],
};

export default CreateCoachConfig;
