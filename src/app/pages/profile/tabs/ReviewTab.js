import { useEffect, useState } from 'react';

const ReviewTab = ({ user }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // axios call
  }, []);
  console.log('🚀 ~ file: ReviewTab.js ~ line 16 ~ user: ', user);

  // if (!data) {
  //   return <FuseLoading />;
  // }

  return <div>REVIEW TAB</div>;
};

export default ReviewTab;
