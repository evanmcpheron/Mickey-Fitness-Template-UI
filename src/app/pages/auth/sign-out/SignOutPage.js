import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import JwtService from '../../../auth/services/jwtService';

function SignOutPage() {
  useEffect(() => {
    setTimeout(() => {
      JwtService.logout();
      return <Navigate to="/sign-in" />;
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0">
      <Paper className="flex items-center w-full sm:w-auto min-h-full sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl sm:shadow sign-out-page">
        <Typography className="text-4xl font-extrabold tracking-tight leading-tight text-center">
          You have signed out!
        </Typography>
      </Paper>
    </div>
  );
}

export default SignOutPage;
