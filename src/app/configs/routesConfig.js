import FuseUtils from "@fuse/utils";
import FuseLoading from "@fuse/core/FuseLoading";
import { Navigate } from "react-router-dom";
import settingsConfig from "app/configs/settingsConfig";
import SignOutConfig from "../pages/sign-out/SignOutConfig";
import Error404Page from "../pages/404/Error404Page";
import ExampleConfig from "../pages/example/ExampleConfig";
import SignInPage from "../pages/sign-in/SignInPage";
import Home from "../pages/Home/Home";
import SignUpPage from "../pages/sign-up/SignUpPage";

const routeConfigs = [ExampleConfig, SignOutConfig];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(
    routeConfigs,
    settingsConfig.defaultAuth
  ),
  {
    path: "",
    element: <Home />,
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
    element: <SignInPage />,
  },
  {
    path: "sign-up",
    element: <SignUpPage />,
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
