import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { proxy } from '@helper/proxy';
import FuseLoading from '@fuse/core/FuseLoading';
import SetupForm from './SetupForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

function StripeComp() {
  const [setupIntent, setSetupIntent] = useState(null);

  useEffect(() => {
    axios
      .get(`${proxy()}/v1/stripe/setup-intent`)
      .then((res) => {
        setSetupIntent(res.data.results.client_secret);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  }, []);

  if (!setupIntent) {
    return <FuseLoading />;
  }

  const options = {
    // passing the client secret obtained in step 2
    clientSecret: setupIntent,
    // Fully customizable with appearance API.
    appearance: {},
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <SetupForm />
    </Elements>
  );
}

export default StripeComp;
