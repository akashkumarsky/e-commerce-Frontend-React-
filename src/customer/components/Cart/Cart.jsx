import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../state/Cart/Action";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const {cart}=useSelector(store=>store);
  console.log("cart ",cart)

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [jwt]);

  
  const handleCheckout = () => {
    navigate("/checkout?step=2"); 
  };
  return (
   <div>
    {cart?.cartItems?.length > 0 &&
    <div className="lg:grid grid-cols-3 lg:px-16 relative bg-gray-900">
      <div className="col-span-2">
      {cart.cartItems.map((item) => (
            <>
              <CartItem item={item} showButton={true}/>
            </>
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
              <span>Price ({cart.cart?.totalItem} item)</span>
              <span>₹{cart.cart.totalPrice}</span>
            </div>
            <div className="flex justify-between pt-3 ">
              <span>Discount</span>
              <span>
                <p className="text-green-600">-₹{cart.cart?.discounte}</p>
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
              <span>₹{cart.cart?.totalDiscountedPrice}</span>
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
    </div>}
    </div>
  );
};

export default Cart;
