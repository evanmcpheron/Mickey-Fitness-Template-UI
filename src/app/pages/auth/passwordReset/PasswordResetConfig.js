import PasswordResetPage from "./PasswordResetPage";
import authRoles from "../../../auth/authRoles";

const PasswordResetConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: "password-reset/:userId/:token",
      element: <PasswordResetPage />,
    },
  ],
};

export default PasswordResetConfig;
