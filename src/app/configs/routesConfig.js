import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import HomeConfig from '../pages/home/HomeConfig';
import HelpCenterAppConfig from '../pages/help-center/HelpCenterAppConfig';
import FileManagerAppConfig from '../pages/file-manager/FileManagerAppConfig';
import ErrorConfig from '../pages/404/ErrorConfig';
import CoachesConfig from '../pages/coaches/CoachesConfig';
import CheckoutConfig from '../pages/checkoutForm/CheckoutConfig';
import ProfileConfig from '../pages/profile/ProfileConfig';
import AuthConfig from '../pages/auth/AuthConfig';
import SettingsConfig from '../pages/profile/SettingsConfig';

const routeConfigs = [
  ...AuthConfig,
  ProfileConfig,
  HomeConfig,
  HelpCenterAppConfig,
  FileManagerAppConfig,
  ErrorConfig,
  CoachesConfig,
  CheckoutConfig,
  SettingsConfig,
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
