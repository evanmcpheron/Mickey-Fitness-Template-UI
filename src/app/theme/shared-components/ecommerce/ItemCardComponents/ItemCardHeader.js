import { Typography } from '@mui/material';
import Ratings from '../../Ratings';

const ItemCardHeader = () => {
  return (
    <div>
      <img
        src="https://atlantisstrength.com/app/uploads/2022/02/gym-equipment-scaled-1920x1080.jpg"
        alt={"coach's service"}
      />
      <div className="p-28 pt-10 pb-10 flex items-center justify-between">
        <h2>Workout Plan</h2>
        <div className="flex items-center">
          <Ratings defaultValue={4.5} /> <Typography className="pl-10">13</Typography>
        </div>
      </div>
    </div>
  );
};

export default ItemCardHeader;
