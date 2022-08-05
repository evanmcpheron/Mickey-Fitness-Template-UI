import Program from './ProgramPage';
import authRoles from '../../../auth/authRoles';

const ProgramConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.user,
  routes: [
    {
      path: '/program/:id',
      element: <Program />,
    },
  ],
};

export default ProgramConfig;
