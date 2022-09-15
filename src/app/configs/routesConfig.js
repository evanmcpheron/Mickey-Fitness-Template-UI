import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import HomeConfig from '../pages/home/HomeConfig';
import HelpCenterAppConfig from '../pages/help-center/HelpCenterAppConfig';
import FileManagerAppConfig from '../pages/file-manager/FileManagerAppConfig';
import ErrorConfig from '../pages/404/ErrorConfig';
import CoachesConfig from '../pages/coaches/CoachesConfig';
import AuthConfig from '../pages/auth/AuthConfig';
import ProfileConfig from '../pages/profile/ProfileConfig';
import LegalConfig from '../pages/legal/LegalConfig';
import StripeConfig from '../pages/stripe/StripeConfig'

const routeConfigs = [
  ...AuthConfig,
  ...ProfileConfig,
  ...LegalConfig,
  ...CoachesConfig,
  HomeConfig,
  HelpCenterAppConfig,
  FileManagerAppConfig,
  ErrorConfig,
  StripeConfig
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
