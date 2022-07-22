import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function PaymentForm() {
  return (
    <Box xs={1}>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} />
      </Grid>
    </Box>
  );
}
