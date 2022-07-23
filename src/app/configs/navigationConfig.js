import i18next from 'i18next';
import { authRoles } from '../auth';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'home-component',
    title: 'HOME',
    type: 'item',
    icon: 'home',
    url: '',
  },
  {
    id: 'coaches-component',
    title: 'COACHES',
    type: 'item',
    icon: 'whistle',
    url: '/coaches',
  },
  {
    id: 'profile-component',
    title: 'PROFILE',
    type: 'item',
    auth: authRoles.user,
    icon: 'user',
    url: '/profile/me',
  },
  {
    id: 'file-manager-component',
    title: 'FILE MANAGER',
    type: 'item',
    auth: authRoles.admin,
    icon: 'cloud',
    url: '/file-manager',
  },
  {
    id: 'settings-component',
    title: 'SETTINGS',
    type: 'item',
    auth: authRoles.user,
    icon: 'gear',
    url: '/settings',
  },
  {
    id: 'help-center-component',
    title: 'HELP CENTER',
    type: 'item',
    icon: 'circle-info',
    url: '/help-center',
  },
  {
    id: 'sign-out-component',
    title: 'SIGN OUT',
    type: 'item',
    auth: authRoles.user,
    icon: 'right-from-bracket',
    url: '/sign-out',
  },
  {
    id: 'signIn-component',
    title: 'SIGN IN',
    auth: authRoles.onlyGuest,
    type: 'item',
    icon: 'lock-open',
    url: 'sign-in',
  },
  {
    id: 'signUp-component',
    title: 'SIGN UP',
    auth: authRoles.onlyGuest,
    type: 'item',
    icon: 'user-plus',
    url: 'sign-up',
  },
];

export default navigationConfig;
