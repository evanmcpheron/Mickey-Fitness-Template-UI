import { useEffect, useState } from 'react';

const ReviewTab = ({ user }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // axios call
  }, []);

  // if (!data) {
  //   return <FuseLoading />;
  // }

  return <h2>REVIEW TAB</h2>;
};

export default ReviewTab;
