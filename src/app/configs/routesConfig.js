import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import SignOutConfig from '../pages/auth/sign-out/SignOutConfig';
import SignInConfig from '../pages/auth/sign-in/SignInConfig';
import SignUpConfig from '../pages/auth/sign-up/SignUpConfig';
import HomeConfig from '../pages/home/HomeConfig';
import ForgotPasswordConfig from '../pages/auth/forgotPassword/ForgotPasswordConfig';
import PasswordResetConfig from '../pages/auth/passwordReset/PasswordResetConfig';
import HelpCenterAppConfig from '../pages/help-center/HelpCenterAppConfig';
import FileManagerAppConfig from '../pages/file-manager/FileManagerAppConfig';
import ErrorConfig from '../pages/404/ErrorConfig';
import CoachesConfig from '../pages/coaches/CoachesConfig';
import CheckoutConfig from '../pages/checkoutForm/CheckoutConfig';

const routeConfigs = [
  SignOutConfig,
  SignInConfig,
  SignUpConfig,
  HomeConfig,
  ForgotPasswordConfig,
  PasswordResetConfig,
  HelpCenterAppConfig,
  FileManagerAppConfig,
  ErrorConfig,
  CoachesConfig,
  CheckoutConfig,
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '*',
    element: <Navigate to="error/404" />,
  },
];

export default routes;
