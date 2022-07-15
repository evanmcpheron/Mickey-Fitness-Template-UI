import FuseUtils from "@fuse/utils";
import FuseLoading from "@fuse/core/FuseLoading";
import { Navigate } from "react-router-dom";
import settingsConfig from "app/configs/settingsConfig";
import SignOutConfig from "../pages/sign-out/SignOutConfig";
import Error404Page from "../pages/404/Error404Page";
import ExampleConfig from "../pages/example/ExampleConfig";
import SignInConfig from "../pages/sign-in/SignInConfig";
import SignUpConfig from "../pages/sign-up/SignUpConfig";
import HomeConfig from "../pages/Home/HomeConfig";

const routeConfigs = [
  ExampleConfig,
  SignOutConfig,
  SignInConfig,
  SignUpConfig,
  HomeConfig,
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
    path: "test",
    element: <Navigate to="/example" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: "loading",
    element: <FuseLoading />,
  },
  {
    path: "sign-in",
    element: <FuseLoading />,
  },
  {
    path: "sign-up",
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
