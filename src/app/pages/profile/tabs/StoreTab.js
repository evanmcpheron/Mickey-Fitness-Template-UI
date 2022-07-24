import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ItemCard from '../../../theme/shared-components/ecommerce/ItemCard';

const StoreTab = ({ user }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // axios call
  }, []);

  // if (!data) {
  //   return <FuseLoading />;
  // }
  console.log('🚀 ~ file: StoreTab.js ~ line 16 ~ user: ', user);

  return (
    <div>
      <h2>STORE TAB</h2>
      <Grid container spacing={6} className="pt-32">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </Grid>
    </div>
  );
};

export default StoreTab;
