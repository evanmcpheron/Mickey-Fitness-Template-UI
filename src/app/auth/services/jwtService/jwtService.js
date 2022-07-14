import FuseUtils from "@fuse/utils/FuseUtils";
import axios from "axios";
import jwtDecode from "jwt-decode";
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
            this.emit("onAutoLogout", "Invalid access_token");
            this.setSession(null);
          }
          throw err;
        });
      }
    );
  };

  handleAuthentication = () => {
    const access_token = this.getAccessToken();

    if (!access_token) {
      this.emit("onNoAccessToken");

      return;
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token);
      this.emit("onAutoLogin", true);
    } else {
      this.setSession(null);
      this.emit("onAutoLogout", "access_token expired");
    }
  };

  createUser = async (data) => {
    console.log("hit");
    try {
      const response = await axios.post(
        proxy() + jwtServiceConfig.signUp,
        data
      );
      this.setSession(response.data.access_token);
      this.emit("onLogin", response.data.user);
    } catch (error) {
      console.log(
        "🚀 ~ file: jwtService.js ~ line 71 ~ JwtService ~ createUser= ~ error",
        error
      );
    }
  };

  signInWithEmailAndPassword = async (email, password, rememberMe) => {
    try {
      const response = await axios.post(proxy() + jwtServiceConfig.signIn, {
        email,
        password,
        rememberMe,
      });
      console.log(
        "🚀 ~ file: jwtService.js ~ line 79 ~ JwtService ~ response ~ response",
        response
      );
      this.setSession(response.data.results.access_token);
      this.emit("onLogin", response.data.message);
    } catch (error) {
      console.log(
        "🚀 ~ file: jwtService.js ~ line 83 ~ JwtService ~ signInWithEmailAndPassword= ~ error",
        error
      );
    }
  };

  signInWithToken = async () => {
    try {
      const response = await axios.get(proxy() + jwtServiceConfig.me, {
        withCredentials: true,
      });
      console.log(
        "🚀 ~ file: jwtService.js ~ line 101 ~ JwtService ~ response ~ response",
        response
      );

      if (response.data.user) {
        this.setSession(response.data.access_token);
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: jwtService.js ~ line 106 ~ JwtService ~ signInWithToken= ~ error",
        error
      );
      // this.logout();
    }
  };

  updateUserData = (user) => {
    return axios.post(proxy() + jwtServiceConfig.updateUser, {
      user,
    });
  };

  setSession = (access_token) => {
    console.log(
      "🚀 ~ file: jwtService.js ~ line 131 ~ JwtService ~ access_token",
      access_token
    );
    if (access_token) {
      localStorage.setItem("jwt_access_token", access_token);
      axios.defaults.headers.common.Authorization = `${access_token}`;
    } else {
      localStorage.removeItem("jwt_access_token");
      delete axios.defaults.headers.common.Authorization;
    }
  };

  logout = () => {
    this.setSession(null);
    this.emit("onLogout", "Logged out");
  };

  isAuthTokenValid = (access_token) => {
    console.log(
      "🚀 ~ file: jwtService.js ~ line 139 ~ JwtService ~ access_token",
      access_token
    );
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn("access token expired");
      return false;
    }

    return true;
  };

  getMe = async () => {
    try {
    } catch (error) {}
  };

  getAccessToken = () => {
    return window.localStorage.getItem("jwt_access_token");
  };
}

const instance = new JwtService();

export default instance;
