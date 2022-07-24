// import { Paper } from '@mui/material';
// import { styled } from '@mui/material/styles';
//
// const Root = styled(Paper)(({ theme }) => ({
//   '.card-container': {
//     background: 'red',
//     borderBottomWidth: 1,
//   },
// }));
//
// const ItemCard = () => {
//   return <Paper>CARD ITEM</Paper>;
// };
//
// export default ItemCard;

import Paper from '@mui/material/Paper';
import { memo, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

function ItemCard(props) {
  const [awaitRender, setAwaitRender] = useState(true);
  const theme = useTheme();
  console.log('🚀 ~ file: ItemCard.js ~ line 24 ~ theme: ', theme);

  useEffect(() => {
    setAwaitRender(false);
  }, []);

  if (awaitRender) {
    return null;
  }
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        sx={{
          background:
            theme.palette.mode === 'light'
              ? theme.palette.background.paper
              : theme.palette.background.default,
        }}
        className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-0"
      >
        <img
          src="https://atlantisstrength.com/app/uploads/2022/02/gym-equipment-scaled-1920x1080.jpg"
          alt={"coach's service"}
        />
        <div className="p-28">
          <h3>Workout Plan</h3>
          <br />
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
      </Paper>
    </Grid>
  );
}

export default memo(ItemCard);
