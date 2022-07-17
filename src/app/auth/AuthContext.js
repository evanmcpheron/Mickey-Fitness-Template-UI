import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FuseSplashScreen from "@fuse/core/FuseSplashScreen";
import { showMessage } from "app/store/fuse/messageSlice";
import { logoutUser, setUser } from "app/store/userSlice";
import jwtService from "./services/jwtService";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [waitAuthCheck, setWaitAuthCheck] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    jwtService.on("onAutoLogin", () => {
      /**
       * Sign in and retrieve user data with stored token
       */
      jwtService
        .signInWithToken()
        .then((user) => {
          success(user);
        })
        .catch((error) => {
          console.error(error);
        });
    });

    jwtService.on("onLogin", (user) => {
      success(user);
    });

    jwtService.on("onForgotPassword", (message) => {
      pass(message, "success");
    });

    jwtService.on("onForgotPasswordError", (message) => {
      pass(message, "error");
    });

    jwtService.on("onLoginError", (message) => {
      pass(message, null);
    });

    jwtService.on("onLogout", () => {
      pass();

      dispatch(logoutUser());
    });

    jwtService.on("onAutoLogout", (message) => {
      pass();

      dispatch(logoutUser());
    });

    jwtService.on("onNoAccessToken", () => {
      pass();
    });

    jwtService.init();

    const success = (user, message, variant = "success") => {
      if (message) {
        dispatch(showMessage({ message, variant }));
      }

      Promise.all([
        dispatch(setUser(user)),
        // You can receive data in here before app initialization
      ]).then((values) => {
        setWaitAuthCheck(false);
        setIsAuthenticated(true);
      });
    };

    const pass = (message, variant = "info") => {
      if (message === "Request failed with status code 404") {
        return;
      }
      if (message) {
        dispatch(showMessage({ message, variant }));
      }

      setWaitAuthCheck(false);
      setIsAuthenticated(false);
    };
  }, [dispatch]);

  return waitAuthCheck ? (
    <FuseSplashScreen />
  ) : (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
