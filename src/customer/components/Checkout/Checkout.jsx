import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import OrderSummery from "./OrderSummery";
import DeleveryAddressForm from "./DeleveryAddressForm";

const steps = ["Login", "Delevery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const step = queryParams.get('step');
  const navigate = useNavigate();
  const orderId = queryParams.get("order_id");


  console.log("step", step)


  const handleNext = () => {
    navigate(`/checkout?step=${parseInt(step) + 1}&order_id=${orderId}`);
  };

  const handleBack = () => {
    navigate(`/checkout?step=${parseInt(step) - 1}&order_id=${orderId}`);
  };



  const handleReset = () => {
    setActiveStep(0);
  };

  const handlePayment = () => {
    console.log("handle payment")
  }

  return (
    <div className="px-10 lg:px-20 pt-12 bg-gray-900 text-white">
      <Box sx={{ width: "100%" }}>
        <Stepper
          activeStep={step-1}
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
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={step === 2}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />


            </Box>
            {/* <Typography sx={{ my: 6 }}>Title</Typography> */}

            <div className="my-5">
             
              {step === "2" ? (
                <DeleveryAddressForm handleNext={handleNext} />
                ) : step === "3" ? (
                  <OrderSummery orderId={orderId} />
                ) : step === "4" ? (
                  <div>Payment Page</div>
                ) : null
              }
              
            </div>


            {/* <AddDeliveryAddressForm handleNext={handleNext} /> */}


          </React.Fragment>
        )}
      </Box>
    </div>
  );
} 
