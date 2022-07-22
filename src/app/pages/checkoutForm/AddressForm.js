import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function AddressForm() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Billing address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} />
      </Grid>
    </Box>
  );
}
