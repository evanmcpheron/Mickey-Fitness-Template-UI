import Program from './ProgramPage';

const ProgramConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/program/:id',
      element: <Program />,
    },
  ],
};

export default ProgramConfig;
