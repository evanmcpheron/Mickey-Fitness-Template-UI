import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import _ from '@lodash';
import Box from '@mui/material/Box';
import { Chip, Stack } from '@mui/material';
import { useState } from 'react';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  store: yup.string().required('You must enter a store name. (It can be your name too)'),
});

const defaultValues = {
  store: '',
  bio: '',
  specialties: '',
  certifications: '',
};

const CreateCoach = () => {
  const [specialties, setSpecialties] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const { control, formState, reset, resetField, getValues } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = async (data) => {
    console.log(data);
  };

  const addSpecialty = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setSpecialties((prev) => [...prev, getValues('specialties')]);
      resetField('specialties');
    }
  };

  const addCertification = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setCertifications((prev) => [...prev, getValues('certifications')]);
      resetField('certifications');
    }
  };

  const handleDeleteSpecialty = (data) => {
    setSpecialties(specialties.filter((item) => item !== data));
  };

  const handleDeleteCertification = (data) => {
    setCertifications(certifications.filter((item) => item !== data));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
      <Box
        className="relative hidden md:flex flex-auto items-center justify-center h-full p-64 lg:px-112 overflow-hidden text-right"
        sx={{ backgroundColor: 'primary.main' }}
      >
        <svg
          className="absolute inset-0 pointer-events-none"
          viewBox="0 0 960 540"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Box
            component="g"
            sx={{ color: 'primary.light' }}
            className="opacity-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="100"
          >
            <circle r="234" cx="196" cy="23" />
            <circle r="234" cx="790" cy="491" />
          </Box>
        </svg>
        <Box
          component="svg"
          className="absolute -top-64 -right-64 opacity-20"
          sx={{ color: 'primary.light' }}
          viewBox="0 0 220 192"
          width="220px"
          height="192px"
          fill="none"
        >
          <defs>
            <pattern
              id="837c3e70-6c3a-44e6-8854-cc48c737b659"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="220" height="192" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
        </Box>

        <div className="z-10 relative w-full max-w-2xl">
          <div className="text-7xl font-bold leading-none text-gray-100">
            <div>Welcome to</div>
            <div>Mickey Fitness Coaching</div>
          </div>
          <div className="mt-24 text-lg tracking-tight leading-6 text-gray-400">
            We're so excited that you chose to coach other and help guide others to a healthier
            happier life!
          </div>
        </div>
      </Box>
      <Box className="h-full sm:h-auto md:flex md:items-center md:justify-start w-full sm:w-auto md:h-full md:w-1/2 py-8 px-16 sm:p-48 md:p-64 sm:rounded-2xl md:rounded-none sm:shadow md:shadow-none ltr:border-r-1 rtl:border-l-1">
        <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
          <form name="registerForm" noValidate className="flex flex-col justify-center w-full">
            <Controller
              name="store"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Store Name"
                  type="text"
                  error={!!errors.email}
                  helperText="It can be your name."
                  variant="outlined"
                  required
                />
              )}
            />
            <Controller
              name="bio"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  id="outlined-multiline-static"
                  label="Bio"
                  multiline
                  rows={10}
                  variant="outlined"
                />
              )}
            />
            {specialties.length > 0 ? (
              <Stack direction="row" className="mb-24" sx={{ flexWrap: 'wrap' }}>
                {specialties.map((specialty, idx) => {
                  return (
                    <Chip
                      className="mr-5 my-5"
                      key={idx}
                      label={specialty}
                      onDelete={() => handleDeleteSpecialty(specialty)}
                    />
                  );
                })}
              </Stack>
            ) : null}
            <Controller
              name="specialties"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  id="outlined-multiline-static"
                  type="text"
                  helperText={'Press "Enter" to add a specialty'}
                  label="Specialties"
                  onKeyDown={(e) => addSpecialty(e)}
                  variant="outlined"
                />
              )}
            />
            {certifications.length > 0 ? (
              <Stack direction="row" className="mb-24" sx={{ flexWrap: 'wrap' }}>
                {certifications.map((cert, idx) => {
                  return (
                    <Chip
                      className="mr-5 my-5"
                      key={idx}
                      label={cert}
                      onDelete={() => handleDeleteCertification(cert)}
                    />
                  );
                })}
              </Stack>
            ) : null}
            <Controller
              name="certifications"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  id="outlined-multiline-static"
                  type="text"
                  helperText={'Press "Enter" to add a certification'}
                  label="Certifications"
                  onKeyDown={(e) => addCertification(e)}
                  variant="outlined"
                />
              )}
            />
            <Button
              variant="contained"
              onClick={onSubmit}
              color="secondary"
              className=" w-full mt-4"
              aria-label="Register"
              disabled={_.isEmpty(dirtyFields) || !isValid}
              type="submit"
              size="large"
            >
              Start Coaching!
            </Button>
          </form>
        </div>
      </Box>
    </div>
  );
};

export default CreateCoach;
