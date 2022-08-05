import { Grid, Paper } from '@mui/material';
import FuseLoading from '@fuse/core/FuseLoading';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const StoreTab = ({ user, store }) => {
  const navigate = useNavigate();

  if (!store) {
    return <FuseLoading />;
  }

  if (store.message === 'There is no store to be found.' && user.isMe) {
    return (
      <div className="w-full flex justify-center items-center">
        <Paper className="p-36 flex justify-center items-center flex-col">
          <h2>There's not a store here yet. Would you like to start one?</h2>
          <Button
            variant="contained"
            color="success"
            className="w-full mt-36"
            onClick={() => navigate('/create/coach')}
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
