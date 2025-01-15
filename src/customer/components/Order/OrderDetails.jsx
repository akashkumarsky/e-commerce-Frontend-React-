import React from "react";
import AddressCart from "../Addresscart/AddressCart";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className=" px:5 lg:px-20 text-white bg-gray-900">
      <div className="pb-5 pt-1">
        <h1 className="text-lg font-bold py-5 pb-1">Dilivery Address</h1>
        <AddressCart />
      </div>
      <div className="py-5 ">
        <OrderTracker activeStep={1} />
      </div>
      <Grid className="space-y-5 py-8" container>
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-5s">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top ml-5"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/k/t/b/l-30602895-kook-n-keech-original-imah7fhg5gcws2hs.jpeg?q=70"
                  alt=""
                />

                <div className="space-y-1 ml-5">
                  <p>Men Slim Mid Rise Black Jeans</p>
                  <p className="space-x-5 text-xs font-semibold opacity-60">
                    <span>Color: pink</span> <span>Size: M</span>
                  </p>
                  <p className="text-xs font-semibold opacity-60">
                    Seller: HRX
                  </p>
                  <p className="text-xs font-semibold opacity-60">₹1089</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box>
                <StarBorderIcon
                  sx={{ fontSize: "2rem" }}
                  className="px-2 opacity-90"
                />
                <span className="opacity-90">Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
