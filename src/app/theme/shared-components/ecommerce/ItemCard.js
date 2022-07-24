import Paper from '@mui/material/Paper';
import { memo, useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import FusePageSimple from '@fuse/core/FusePageSimple/FusePageSimple';
import ItemCardHeader from './ItemCardComponents/ItemCardHeader';
import ItemCardContent from './ItemCardComponents/ItemCardContent';

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
        <Root header={<ItemCardHeader />} content={<ItemCardContent />} />
      </Paper>
    </Grid>
  );
}

export default memo(ItemCard);
