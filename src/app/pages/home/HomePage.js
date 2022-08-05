import { styled, ThemeProvider } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { Box } from '@mui/system';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { OutlinedInput } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useSelector } from 'react-redux';
import { selectMainThemeDark } from 'app/store/fuse/settingsSlice';
import Icons from '../../../@helper/Icons';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

const HomePage = (props) => {
  const mainThemeDark = useSelector(selectMainThemeDark);

  return (
    <Root
      header={
        <ThemeProvider theme={mainThemeDark}>
          <Box
            className="relative pt-32 pb-112 px-16 sm:pt-80 sm:pb-192 sm:px-64 overflow-hidden"
            sx={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url("https://mickey-fitness.s3.us-west-1.amazonaws.com/pages/home/banner.jpeg")`,
              backgroundSize: 'cover',
              color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
            }}
          >
            <div className="flex flex-col items-center justify-center  mx-auto w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0 } }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0 } }}
              >
                <Typography className="mt-4 text-32 sm:text-48 font-extrabold tracking-tight leading-tight text-center">
                  Mickey Fitness
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3 } }}
              >
                <Typography
                  color="text.secondary"
                  className="mt-12 sm:text-20 text-center tracking-tight"
                >
                  Explore a healthier you by searching for coaches from nutrition, yoga, weight
                  training and more!
                </Typography>
              </motion.div>
              <OutlinedInput
                component={motion.div}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                className="flex flex-1 items-center px-16 mx-8 rounded-full h-44 w-full max-w-320 sm:max-w-480 mt-40 sm:mt-80"
                placeholder="Enter a coach, topic or keyword"
                variant="outlined"
                fullWidth
                startAdornment={
                  <InputAdornment position="start">
                    <FuseSvgIcon color="disabled" icon={Icons.faMagnifyingGlass} />
                  </InputAdornment>
                }
                inputProps={{
                  'aria-label': 'Search',
                }}
              />
            </div>

            <svg
              className="absolute inset-0 pointer-events-none"
              viewBox="0 0 960 540"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMax slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                className="text-gray-700 opacity-25"
                fill="none"
                stroke="currentColor"
                strokeWidth="100"
              >
                <circle r="234" cx="196" cy="23" />
                <circle r="234" cx="790" cy="491" />
              </g>
            </svg>
          </Box>
        </ThemeProvider>
      }
      content={<div className="p-24">HOME</div>}
      scroll="content"
    />
  );
};

export default HomePage;
