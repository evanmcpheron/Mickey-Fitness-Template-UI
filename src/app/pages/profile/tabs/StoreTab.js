import { useEffect, useState } from 'react';

const StoreTab = ({ user }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // axios call
  }, []);

  // if (!data) {
  //   return <FuseLoading />;
  // }
  console.log('🚀 ~ file: StoreTab.js ~ line 16 ~ user: ', user);

  return <div>STORE TAB</div>;
};

export default StoreTab;
