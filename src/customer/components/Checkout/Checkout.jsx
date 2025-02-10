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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const step = queryParams.get('step');
  const navigate = useNavigate();
  const orderId = queryParams.get("order_id");

  const handleNext = () => {
    navigate(`/checkout?step=${parseInt(step) + 1}&order_id=${orderId}`);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="px-10 lg:px-20 pt-12 bg-gray-900 text-white min-h-screen">
      <Box sx={{ width: "100%", borderRadius: "8px", boxShadow: 2, overflow: "hidden" }}>
        <Stepper
          activeStep={parseInt(step) - 1}
          sx={{
            '& .MuiStepLabel-label': {
              color: 'white', // Default text color
              fontWeight: 'bold',
              transition: 'color 0.3s',
            },
            '& .MuiStepLabel-label.Mui-active': {
              color: 'white', // Active step text color
            },
            '& .MuiStepLabel-label.Mui-completed': {
              color: 'green', // Completed step text color
            },
            '& .MuiStepIcon-root': {
              color: 'gray', // Inactive step icon color
              transition: 'color 0.3s',
            },
            '& .MuiStepIcon-root.Mui-active': {
              color: 'blue', // Active step icon color
            },
            '& .MuiStepIcon-root.Mui-completed': {
              color: 'green', // Completed step icon color
            },
          }}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, fontSize: '1.25rem' }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button 
                onClick={handleReset} 
                variant="contained" 
                sx={{ bgcolor: 'green', '&:hover': { bgcolor: 'darkgreen' } }}
              >
                Reset
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="my-5">
              {step === "2" ? (
                <DeleveryAddressForm orderId={orderId} handleNext={handleNext} />
              ) : step === "3" ? (
                <OrderSummery orderId={orderId} />
              ) : step === "4" ? (
                <div>Payment Page</div>
              ) : null}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
