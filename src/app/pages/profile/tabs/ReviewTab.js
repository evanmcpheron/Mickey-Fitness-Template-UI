import { useEffect, useState } from 'react';
import StripeComp from './stripe/StripeComp';

const ReviewTab = ({ user }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // axios call
  }, []);

  // if (!data) {
  //   return <FuseLoading />;
  // }

  return <StripeComp />;
};

export default ReviewTab;
