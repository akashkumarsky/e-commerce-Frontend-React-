import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
const steps = ["Order placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]


const OrderTracker = ({ activeStep }) => {
    return (
        <div calssName='w-full text-white'>
            <Stepper activeStep={activeStep} sx={{
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
            }} alternativeLabel>
                {steps.map((lable) => <Step>
                    <StepLabel sx={{ color: "white", fontSize: "44px" }}>{lable}</StepLabel>
                </Step>)}
            </Stepper>
        </div>
    )
}

export default OrderTracker