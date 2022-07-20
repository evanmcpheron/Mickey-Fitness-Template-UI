import React from "react";
import { authRoles } from "src/app/auth";
import ForgotPassword from "./ForgotPassword";

const ForgotPasswordConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "forgot-password",
      auth: authRoles.onlyGuest,
      element: <ForgotPassword />,
    },
  ],
};

export default ForgotPasswordConfig;
