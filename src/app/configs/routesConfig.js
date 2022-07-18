import FuseUtils from "@fuse/utils";
import FuseLoading from "@fuse/core/FuseLoading";
import { Navigate } from "react-router-dom";
import settingsConfig from "app/configs/settingsConfig";
import SignOutConfig from "../pages/sign-out/SignOutConfig";
import Error404Page from "../pages/404/Error404Page";
import ExampleConfig from "../pages/example/ExampleConfig";
import SignInConfig from "../pages/sign-in/SignInConfig";
import SignUpConfig from "../pages/sign-up/SignUpConfig";
import HomeConfig from "../pages/home/HomeConfig";
import ForgotPasswordConfig from "../pages/forgotPassword/ForgotPasswordConfig";
import PasswordResetConfig from "../pages/passwordReset/PasswordResetConfig";
import HelpCenterAppConfig from "../pages/help-center/HelpCenterAppConfig";
import FileManagerAppConfig from "../pages/file-manager/FileManagerAppConfig";

const routeConfigs = [
  ExampleConfig,
  SignOutConfig,
  SignInConfig,
  SignUpConfig,
  HomeConfig,
  ForgotPasswordConfig,
  PasswordResetConfig,
  HelpCenterAppConfig,
  FileManagerAppConfig,
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(
    routeConfigs,
    settingsConfig.defaultAuth
  ),
  {
    path: "",
    element: <FuseLoading />,
  },
  {
    path: "loading",
    element: <FuseLoading />,
  },
  {
    path: "404",
    element: <Error404Page />,
  },
  {
    path: "*",
    element: <Navigate to="404" />,
  },
];

export default routes;
