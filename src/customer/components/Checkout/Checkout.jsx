import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import OrderSummery from "./OrderSummery";
import DeleveryAddressForm from "./DeleveryAddressForm";

const steps = ["Login", "Delevery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const location = useLocation();
  const [activeStep, setActiveStep] = React.useState(0);

  // Update activeStep when query parameter changes
  React.useEffect(() => {
    const querySearch = new URLSearchParams(location.search);
    const step = parseInt(querySearch.get("step"), 10);
    if (!isNaN(step) && step >= 0 && step < steps.length) {
      setActiveStep(step);
    }
  }, [location.search]);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return <DeleveryAddressForm />;
      case 2:
        return <OrderSummery />;
      default:
        return <Typography>Step {step + 1} Content</Typography>;
    }
  };

  return (
    <div className="px-10 lg:px-20 pt-12 bg-gray-900 text-white">
      <Box sx={{ width: "100%" }}>
      <Stepper 
  activeStep={activeStep}
  sx={{
    '& .MuiStepLabel-label': {
      color: 'white', // Default text color
    },
    '& .MuiStepLabel-label.Mui-active': {
      color: 'white', // Active step text color
    },
    '& .MuiStepLabel-label.Mui-completed': {
      color: 'white', // Completed step text color
    },
    '& .MuiStepIcon-root': {
      color: 'gray', // Inactive step icon color
    },
    '& .MuiStepIcon-root.Mui-active': {
      color: 'blue', // Active step icon color
    },
    '& .MuiStepIcon-root.Mui-completed': {
      color: 'green', // Completed step icon color
    },
  }}
>
  {steps.map((label, index) => {
    const stepProps = {};
    const labelProps = {};

    return (
      <Step key={label} {...stepProps}>
        <StepLabel {...labelProps}>{label}</StepLabel>
      </Step>
    );
  })}
</Stepper>

        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {renderStepContent(activeStep)}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Link
                to={`?step=${activeStep + 1}`}
                className="text-blue-500 underline"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Link>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
