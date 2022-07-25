import { useEffect, useState } from 'react';

const AboutTab = ({ user }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // axios call
  }, []);

  // if (!data) {
  //   return <FuseLoading />;
  // }

  return <div>ABOUT TAB</div>;
};

export default AboutTab;
