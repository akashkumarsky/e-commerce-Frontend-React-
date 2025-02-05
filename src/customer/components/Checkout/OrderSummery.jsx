import React, { useEffect } from 'react';
import AddressCart from '../Addresscart/AddressCart';
import CartItem from '../Cart/CartItem';
import { Button, Divider } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { getOrderById } from '../../../state/Order/Action';
import { useDispatch, useSelector } from 'react-redux';

const OrderSummery = ({ orderId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { order } = useSelector(state => state.order) || {};
  const { auth } = useSelector((store) => store);
  const { cart } = useSelector(store => store) || { cart: { cartItems: [] } };
  const cartItems = cart.cartItems || [];
  const { selectedAddress } = useSelector((state) => state.address || {});

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [orderId, dispatch]);

  return (
    <div className="p-6 shadow-lg rounded-lg border bg-gray-900 text-white">
      {/* Order Summary Header */}
      <h1 className="text-2xl text-center font-semibold mb-4">
        Order Summary
      </h1>

      {/* Address Section */}
      <div className="mb-6">
        <AddressCart address={order?.shippingAddress || selectedAddress || auth?.user?.addresses[0]} />
      </div>

      {/* Cart Items & Price Details */}
      <div className="lg:grid grid-cols-3 gap-6 lg:px-12 bg-gray-800 rounded-lg shadow-md p-4">
        {/* Cart Items */}
        <div className="col-span-2 space-y-4">
          {cartItems.length > 0 && cartItems.map((item) => (
            <CartItem key={item.id} item={item} showButton={true} />
          ))}
        </div>

       

        {/* Price Details */}
        <div className="sticky top-0 h-auto lg:mt-0 bg-gray-900 p-5 shadow-md rounded-lg">
          <div className="border p-5  shadow-lg rounded-md text-white">
          <p className="font-bold opacity-60 pb-4 uppercase">Price Details</p>
            <Divider sx={{ backgroundColor: 'white' }} />

            <div className="space-y-3 font-semibold mt-4">
              <div className="flex justify-between">
                <span>Price ({order?.totalItem || 0} item)</span>
                <span>₹{order?.totalPrice || 0}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-₹{order?.discounte || 0}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>
              <Divider sx={{ backgroundColor: 'white' }} />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">₹{order?.totalDiscountedPrice || 0}</span>
              </div>
            </div>

            <Button
              variant="contained"
              type="submit"
              sx={{
                padding: ".8rem 2rem",
                marginTop: "1.5rem",
                width: "100%",
                backgroundColor: "#1E3A8A",
                fontWeight: "bold",
                textTransform: "uppercase",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(144, 143, 143, 0.3)",
                transition: "transform 0.2s ease-in-out, background-color 0.2s ease",
                "&:hover": {
                  bgcolor: "darkblue",
                  transform: "scale(1.05)",
                },
              }}
            >
              Proceed to Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
