import { useEffect, useState } from 'react';

function StoreTab() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // axios call
  }, []);

  // if (!data) {
  //   return <FuseLoading />;
  // }

  return <div>STORE TAB</div>;
}

export default StoreTab;
