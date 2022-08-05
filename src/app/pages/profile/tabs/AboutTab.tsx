import { useEffect, useState } from 'react';

const AboutTab = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // axios call
  }, []);

  // if (!data) {
  //   return <FuseLoading />;
  // }

  return <h2>ABOUT TAB</h2>;
};

export default AboutTab;
