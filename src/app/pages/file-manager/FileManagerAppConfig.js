import { lazy } from "react";

const FileManagerApp = lazy(() => import("./FileManagerApp"));

const FileManagerAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/file-manager",
      element: <FileManagerApp />,
    },
    {
      path: "/file-manager/:folderId",
      element: <FileManagerApp />,
    },
  ],
};

export default FileManagerAppConfig;
