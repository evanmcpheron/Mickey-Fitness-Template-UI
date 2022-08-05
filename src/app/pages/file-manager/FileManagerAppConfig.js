import { lazy } from 'react';
import { authRoles } from '../../auth';

const FileManagerApp = lazy(() => import('./FileManagerApp'));

const FileManagerAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.admin,
  routes: [
    {
      path: '/file-manager',
      element: <FileManagerApp />,
    },
    {
      path: '/file-manager/:folderId',
      element: <FileManagerApp />,
    },
  ],
};

export default FileManagerAppConfig;
