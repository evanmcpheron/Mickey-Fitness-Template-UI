import FuseUtils from "@fuse/utils/FuseUtils";
import axios from "axios";
import { get } from "lodash";
import { proxy } from "src/app/helper/proxy";
import jwtServiceConfig from "./jwtServiceConfig";

/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return new Promise((resolve, reject) => {
          if (
            err.response.status === 401 &&
            err.config &&
            !err.config.__isRetryRequest
          ) {
            // if you ever get an unauthorized response, logout the user
            this.emit("onAutoLogout");
          }
          throw err;
        });
      }
    );
  };

  handleAuthentication = async () => {
    const validUser = await this.getMe();

    if (validUser.data.error) {
      this.emit("onNoAccessToken");
      return;
    }

    if (!validUser.data.error) {
      this.emit("onAutoLogin", true);
    } else {
      this.emit("onAutoLogout", "Session expired");
    }
  };

  createUser = async (data) => {
    try {
      const response = await axios.post(
        proxy() + jwtServiceConfig.signUp,
        data
      );

      this.setSession(response.data.access_token);
      this.emit("onLogin", response.data.results.user);
    } catch (error) {
      const errorMessage = get(
        error,
        "response.data.message",
        "Oops. Something went wrong."
      );

      this.emit("onLoginError", errorMessage);
    }
  };

  signInWithEmailAndPassword = async (email, password, rememberMe) => {
    const mockResponse = {
      uuid: "XgbuVEXBU5gtSKdbQRP1Zbbby1i1",
      password: "admin",
      role: "admin",
      data: {
        displayName: "Abbott Keitch",
        photoURL: "assets/images/avatars/brian-hughes.jpg",
        email: "admin@fusetheme.com",
      },
    };

    try {
      const response = await axios.post(proxy() + jwtServiceConfig.signIn, {
        email,
        password,
        rememberMe,
      });
      console.log(
        "🚀 ~ file: jwtService.js ~ line 73 ~ JwtService ~ response ~ response",
        response.data.results.user
      );

      this.emit("onLogin", response.data.results.user);
    } catch (error) {
      const errorMessage = get(
        error,
        "response.data.message",
        "Oops. Something went wrong."
      );
      this.emit("onLoginError", errorMessage);
    }
  };

  signInWithToken = async () => {
    try {
      const response = await this.getMe();

      this.emit("onLogin", response.data.results);
    } catch (error) {
      this.logout();
    }
  };

  updateUserData = (user) => {
    return axios.post(proxy() + jwtServiceConfig.updateUser, {
      user,
    });
  };

  setSession = (access_token) => {
    if (access_token) {
      localStorage.setItem("jwt_access_token", access_token);
      axios.defaults.headers.common.Authorization = `${access_token}`;
    } else {
      localStorage.removeItem("jwt_access_token");
      delete axios.defaults.headers.common.Authorization;
    }
  };

  logout = async () => {
    try {
      await axios.post(proxy() + jwtServiceConfig.signOut);
    } catch (error) {
      console.log(
        "🚀 ~ file: jwtService.js ~ line 119 ~ JwtService ~ logout= ~ error",
        error
      );
    }
    this.emit("onLogout");
  };

  getMe = async () => {
    try {
      const response = await axios.get(proxy() + jwtServiceConfig.me);
      return response;
    } catch (error) {
      return error.response;
    }
  };
}

const instance = new JwtService();

export default instance;
