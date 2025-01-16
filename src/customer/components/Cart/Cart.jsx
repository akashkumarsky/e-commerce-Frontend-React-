import React from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  
  const handleCheckout = () => {
    navigate("/checkout?step=1"); 
  };
  return (
    <div className="lg:grid grid-cols-3 lg:px-16 relative bg-gray-900">
      <div className="col-span-2">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <CartItem />
        ))}
      </div>
      <div className="sticky px-5 top-0 h-[100vh] mt-5 lg:mt-0 text-white">
        <div className="">
          <p className="uppercase font-bold opacity-60 pb-4 mt-3">
            Price Details
          </p>
          <Divider sx={{ borderColor: "white" }} />
          <div className="space-y-3 font-semibold mb-4" >
            <div className="flex justify-between pt-3">
              <span>price</span>
              <span>₹4545</span>
            </div>
            <div className="flex justify-between pt-3 ">
              <span>Discount</span>
              <span>
                <p className="text-green-600">-₹1545</p>
              </span>
            </div>
            <div className="flex justify-between pt-3 ">
              <span>Delivery Charges</span>
              <span>
                <p className="text-green-600">Free</p>
              </span>
            </div>
            <Divider sx={{ borderColor: "white" }} />
            <div className="flex justify-between pt-3">
              <span>Total Amount</span>
              <span>₹3000</span>
            </div>
          </div>
          <Button
                    variant="contained"
                    className="w-full"
                    sx={{
                      px: "1.5rem",
                      py: "1rem",
                      color: "white",
                      bgcolor: "blue-600",
                      borderRadius: "10px", // Rounded corners
                      fontSize: "1rem", // Slightly larger font size for readability
                      fontWeight: "bold", // Emphasize text
                      textTransform: "uppercase", // Make text uppercase for prominence
                      boxShadow: "0px 4px 10px rgba(144, 143, 143, 0.3)", // Add a subtle shadow for depth
                      transition:
                        "transform 0.2s ease-in-out, background-color 0.2s ease", // Smooth hover effect
                      "&:hover": {
                        bgcolor: "darkblue", // Change background color on hover
                        transform: "scale(1.05)", // Slightly enlarge the button on hover
                      },
                    }}
                    onClick={handleCheckout}
                  >
                    Checkout
                  </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
