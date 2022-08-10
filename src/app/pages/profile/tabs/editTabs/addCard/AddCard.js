import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

const steps = ['Billing address', 'Card details'];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    default:
      throw new Error('Unknown step');
  }
};

const AddCard = ({ open, setOpen }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Paper>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            setOpen(false)
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button
                    onClick={handleBack}
                    variant="contained"
                    color="warning"
                    className=" w-full mt-16"
                    aria-label="Sign in"
                    // disabled={_.isEmpty(dirtyFields) || !isValid}
                    type="submit"
                    size="large"
                  >
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  color="secondary"
                  className=" w-full mt-16"
                  aria-label="Sign in"
                  // disabled={_.isEmpty(dirtyFields) || !isValid}
                  type="submit"
                  size="large"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Add Card' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </>
      </Paper>
    </div>
  );
};

export default AddCard;
