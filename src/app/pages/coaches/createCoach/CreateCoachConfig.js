import CreateCoach from './CreateCoach';
import authRoles from '../../../auth/authRoles';

const CreateCoachConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.user,
  routes: [
    {
      path: '/create/coach',
      element: <CreateCoach />,
    },
  ],
};

export default CreateCoachConfig;
