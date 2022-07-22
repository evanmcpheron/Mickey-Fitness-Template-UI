import CheckoutPage from './CheckoutPage';

const CheckoutConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/checkout',
      element: <CheckoutPage />,
    },
  ],
};

export default CheckoutConfig;
