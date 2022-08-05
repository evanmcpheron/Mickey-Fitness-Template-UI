import authRoles from 'app/auth/authRoles';
import ForgotPassword from './ForgotPassword';

const ForgotPasswordConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: 'forgot-password',
      element: <ForgotPassword />,
    },
  ],
};

export default ForgotPasswordConfig;
