import { styled } from '@mui/material/styles';
import { Rating } from '@mui/lab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const Ratings = ({ defaultValue, readOnly }) => {
  return (
    <StyledRating
      readOnly={readOnly ?? true}
      name="customized-color"
      defaultValue={defaultValue}
      getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
      precision={0.5}
      icon={<FavoriteIcon fontSize="inherit" />}
      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
    />
  );
};

export default Ratings;
