import React, { useEffect } from 'react'
import AddressCart from '../Addresscart/AddressCart'
import CartItem from '../Cart/CartItem'
import { Button, Divider } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { getOrderById } from '../../../state/Order/Action'
import { useDispatch, useSelector } from 'react-redux'

const OrderSummery = ({ orderId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { order } = useSelector(state => state.order) || {};
  const { auth } = useSelector((store) => store);
  const { cart } = useSelector(store => store) || { cart: { cartItems: [] } };
  const cartItems = cart.cartItems || [];
  const { selectedAddress } = useSelector((state) => state.address || {});
  








  console.log("Order ID: ", orderId);



  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [orderId, dispatch]);



  // const handleCreatePayment = () => {
  //   const data = { orderId: order.order?.id, jwt }
  //   dispatch(createPayment(data))
  // }


  return (
    <div className='p-5 shadow-lg rounded-s-md border'>
      <h1 className='text-2xl text-center font-semibold'>Order Summery</h1>
      <div>
      <AddressCart address={order?.shippingAddress || selectedAddress || auth?.user?.addresses[0]} />

      </div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative bg-gray-900">
        <div className="col-span-2">
          {cartItems.length > 0 && cartItems.map((item) => (
            <CartItem key={item.id} item={item} showButton={true} />
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
                bgcolor: "#1E3A8A",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                boxShadow: "0px 4px 10px rgba(144, 143, 143, 0.3)",
                transition:
                  "transform 0.2s ease-in-out, background-color 0.2s ease",
                "&:hover": {
                  bgcolor: "darkblue",
                  transform: "scale(1.05)",
                },
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummery