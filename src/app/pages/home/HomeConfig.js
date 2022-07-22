import Home from './HomePage';

const HomeConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '',
      element: <Home />,
    },
  ],
};

export default HomeConfig;
