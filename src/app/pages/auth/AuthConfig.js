import ForgotPasswordConfig from './forgotPassword/ForgotPasswordConfig';
import PasswordResetConfig from './passwordReset/PasswordResetConfig';
import SignInConfig from './sign-in/SignInConfig';
import SignUpConfig from './sign-up/SignUpConfig';
import SignOutConfig from './sign-out/SignOutConfig';

const AuthConfig = [
  ForgotPasswordConfig,
  PasswordResetConfig,
  SignOutConfig,
  SignUpConfig,
  SignInConfig,
];

export default AuthConfig;
