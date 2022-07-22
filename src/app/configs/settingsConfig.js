import themesConfig from 'app/configs/themesConfig';
import i18n from '../../i18n';

const initMode = () => {
  if (localStorage.getItem('mode')) {
    return localStorage.getItem('mode');
  }
  localStorage.setItem('mode', 'light');
  return 'light';
};

const settingsConfig = {
  layout: {
    style: 'layout',
    config: {}, // checkout default layout configs at app/theme for example  app/theme/layout/LayoutConfig.js
  },
  customScrollbars: true,
  direction: i18n.dir(i18n.options.lng) || 'ltr', // rtl, ltr
  mode: initMode(),
  theme: {
    main: localStorage.getItem('mode') === 'light' ? themesConfig.light : themesConfig.dark,
    navbar: localStorage.getItem('mode') === 'light' ? themesConfig.light : themesConfig.dark,
    toolbar: localStorage.getItem('mode') === 'light' ? themesConfig.light : themesConfig.dark,
    footer: localStorage.getItem('mode') === 'light' ? themesConfig.light : themesConfig.dark,
  },
  /*
   To make whole app auth protected by default set defaultAuth:['admin','staff','user'] IMPORTANT
   To make whole app accessible without authorization by default set defaultAuth: null
   *** The individual route configs which has auth option won't be overridden.
   */
  defaultAuth: null,
  /*
    Default redirect url for the logged-in user,
   */
  loginRedirectUrl: '/',
};

export default settingsConfig;
