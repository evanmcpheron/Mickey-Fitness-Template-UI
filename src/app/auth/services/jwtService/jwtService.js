import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import { get } from 'lodash';
import { proxy } from '@helper/proxy';
import jwtServiceConfig from './jwtServiceConfig';

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
          if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
            // if you ever get an unauthorized response, logout the user
            this.emit('onAutoLogout');
          }
          throw err;
        });
      }
    );
  };

  handleAuthentication = async () => {
    const validUser = await this.getMe();

    if (validUser.data.error) {
      this.emit('onNoAccessToken');
      return;
    }

    if (!validUser.data.error) {
      this.emit('onAutoLogin', true);
    } else {
      this.emit('onAutoLogout', 'Session expired');
    }
  };

  createUser = async (data) => {
    try {
      const response = await axios.post(proxy() + jwtServiceConfig.signUp, data);

      this.setSession(response.data.access_token);
      this.emit('onLogin', response.data.results.user);
    } catch (error) {
      const errorMessage = get(error, 'response.data.message', 'Oops. Something went wrong.');

      this.emit('onLoginError', errorMessage);
    }
  };

  signInWithEmailAndPassword = async (email, password, rememberMe) => {
    try {
      const response = await axios.post(proxy() + jwtServiceConfig.signIn, {
        email,
        password,
        rememberMe,
      });

      this.emit('onLogin', response.data.results.user);
    } catch (error) {
      const errorMessage = get(error, 'response.data.message', 'Oops. Something went wrong.');
      this.emit('onLoginError', errorMessage);
    }
  };

  forgotPassword = async (email) => {
    try {
      const response = await axios.post(proxy() + jwtServiceConfig.forgotPassword, { email });
      this.emit('onForgotPassword', response.data.message);
    } catch (error) {
      const errorMessage = get(error, 'message', 'Oops. Something went wrong.');

      this.emit('onForgotPasswordError', errorMessage);
    }
  };

  passwordReset = async (password, userId, token) => {
    try {
      const response = await axios.post(
        `${proxy()}${jwtServiceConfig.passwordReset}/${userId}/${token}`,
        password
      );

      this.emit('onForgotPassword', response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  signInWithToken = async () => {
    try {
      const response = await this.getMe();

      this.emit('onLogin', response.data.results);
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
      localStorage.setItem('jwt_access_token', access_token);
      axios.defaults.headers.common.Authorization = `${access_token}`;
    } else {
      localStorage.removeItem('jwt_access_token');
      delete axios.defaults.headers.common.Authorization;
    }
  };

  logout = async () => {
    try {
      await axios.post(proxy() + jwtServiceConfig.signOut);
    } catch (error) {
      console.log('🚀 ~ file: jwtService.js ~ line 147 ~ error: ', error);
    }
    this.emit('onLogout');
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
