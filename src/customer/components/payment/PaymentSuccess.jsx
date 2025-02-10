import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updatePayment } from "../../../state/Payment/Action";
import { getOrderById } from "../../../state/CustomerOrder/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../Order/OrderTracker";
import AddressCart from '../Addresscart/AddressCart';

const PaymentSuccess = () => {
  // razorpay_payment_link_reference_id
  // razorpay_payment_id
  const [paymentId, setPaymentId] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const {orderId}=useParams();

  

  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    console.log("orderId",orderId)
    const urlParams = new URLSearchParams(window.location.search);
    setPaymentId(urlParams.get("razorpay_payment_id"));
    setReferenceId(urlParams.get("razorpay_payment_link_reference_id"));
    setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if (paymentId && paymentStatus === "paid") {
      const data = { orderId, paymentId, jwt };
      dispatch(updatePayment(data));
      dispatch(getOrderById(orderId));
    }
  }, [orderId, paymentId]);

  return (
    <div className="px-2 lg:px-36 bg-gray-900 text-white">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation Your Order Get Placed
        </Alert>
      </div>

      <OrderTracker activeStep={1}/>

      <Grid container className="space-y-5 py-5 pt-20">
      {order?.order?.orderItems?.length > 0 ? (
  order.order.orderItems.map((item) => (
    <Grid
      container
      item
      key={item.id} // Always add key when mapping
      className="shadow-xl rounded-md p-5 border"
      sx={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <Grid item xs={6}>
        <div className="flex items-center">
          <img
            className="w-[5rem] h-[5rem] object-cover object-top"
            src={item?.product.imageUrl}
            alt={item?.product.title || "Product"}
          />
          <div className="ml-5 space-y-2">
            <p>{item?.product.title}</p>
            <p className="opacity-50 text-xs font-semibold space-x-5">
              <span>Color: pink</span> <span>Size: {item?.size}</span>
            </p>
            <p>Seller: {item?.product.brand}</p>
            <p>₹{item?.price}</p>
          </div>
        </div>
      </Grid>
      <Grid item>
        <AddressCart address={order?.order?.shippingAddress} />
      </Grid>
    </Grid>
  ))
) : (
  <p>Loading Order Details...</p> // Handle loading state
)}

      </Grid>
    </div>
  );
};

export default PaymentSuccess;
