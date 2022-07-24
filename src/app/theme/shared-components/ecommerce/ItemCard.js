import Paper from '@mui/material/Paper';
import { memo, useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import FusePageSimple from '@fuse/core/FusePageSimple/FusePageSimple';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
    background:
      theme.palette.mode === 'light'
        ? theme.palette.background.paper
        : theme.palette.background.default,
  },
  '& .FusePageSimple-content': {
    background:
      theme.palette.mode === 'light'
        ? theme.palette.background.paper
        : theme.palette.background.default,
  },
}));

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
      <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-0">
        <Root
          header={
            <div>
              <img
                src="https://atlantisstrength.com/app/uploads/2022/02/gym-equipment-scaled-1920x1080.jpg"
                alt={"coach's service"}
              />
              <div className="p-28 pt-10 pb-10">
                <h2 sx={{ borderColor: 'red', borderWidth: '2px', borderStyle: 'solid' }}>
                  Workout Plan
                </h2>
              </div>
            </div>
          }
          content={
            <ul className="p-28 pt-10">
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          }
        />
      </Paper>
    </Grid>
  );
}

export default memo(ItemCard);
