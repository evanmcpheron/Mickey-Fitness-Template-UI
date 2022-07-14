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
            this.emit("onAutoLogout", "Invalid Session");
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
      this.emit("onLogin", response.data.user);
    } catch (error) {}
  };

  signInWithEmailAndPassword = async (email, password, rememberMe) => {
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

      // this.setSession(response.data.results.access_token);
      this.emit("onLogin", response.data.results.user);
    } catch (error) {}
  };

  signInWithToken = async () => {
    try {
      const response = await this.getMe();
      console.log(
        "🚀 ~ file: jwtService.js ~ line 82 ~ JwtService ~ signInWithToken= ~ response",
        response.data.results
      );
      this.emit("onLogin", response.data.results);
    } catch (error) {
      console.log(
        "🚀 ~ file: jwtService.js ~ line 106 ~ JwtService ~ signInWithToken= ~ error",
        error
      );
      this.emit("onLogout", "Logged out");
      // this.logout();
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
    this.emit("onLogout", "Logged out");
  };

  getMe = async () => {
    try {
      return await axios.get(proxy() + jwtServiceConfig.me);
    } catch (error) {
      console.log(
        "🚀 ~ file: jwtService.js ~ line 162 ~ JwtService ~ getMe= ~ error",
        error
      );
    }
  };
}

const instance = new JwtService();

export default instance;
