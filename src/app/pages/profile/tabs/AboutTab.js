import { useEffect, useState } from 'react';

const AboutTab = ({ user }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // axios call
  }, []);

  // if (!data) {
  //   return <FuseLoading />;
  // }

  console.log('🚀 ~ file: AboutTab.js ~ line 238 ~ user: ', user);

  return <div>ABOUT TAB</div>;
};

export default AboutTab;
