import { useEffect, useState } from 'react';
import { Grid, Paper } from '@mui/material';
import FuseLoading from '@fuse/core/FuseLoading';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { proxy } from '../../../helper/proxy';

const StyledPaper = styled(Paper)(({ theme }) => ({
  background:
    theme.palette.mode === 'light'
      ? theme.palette.background.default
      : theme.palette.background.paper,
}));

const StoreTab = ({ user }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`${proxy()}/v1/store/me`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log('🚀 ~ file: StoreTab.js ~ line 16 ~ err: ', err);
      });
  }, []);

  const navigate = useNavigate();

  if (!data) {
    return <FuseLoading />;
  }

  if (data.message === 'There is no store to be found.') {
    return (
      <div className="w-full flex justify-center items-center">
        <Paper className="p-36 flex justify-center items-center flex-col">
          <h2>There's not a store here yet. Would you like to start one?</h2>
          <Button
            variant="contained"
            color="success"
            className="w-full mt-36"
            onClick={() => navigate('/')}
          >
            Create Store
          </Button>
        </Paper>
      </div>
    );
  }

  return (
    <div>
      <h2>STORE TAB</h2>
      <Grid container spacing={6} className="pt-32" />
    </div>
  );
};

export default StoreTab;
