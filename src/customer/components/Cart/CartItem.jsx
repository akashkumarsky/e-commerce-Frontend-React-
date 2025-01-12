import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg rounded-md bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 mt-2">
      <div className="flex items-center ">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="h-full w-full object-top object-cover"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/k/t/b/l-30602895-kook-n-keech-original-imah7fhg5gcws2hs.jpeg?q=70"
            alt="kook n keech"
          />
        </div>
        <div className="ml-5 space-y-1 text-white">
          <p className="font-semibold ">
            Men Printed Round Neck Pure Cotton Blue T-Shirt
          </p>
          <p className=" opacity-70">Size: L , White</p>
          <p className="opacity-70 mt-2">Seller: Kook n Keech</p>
          <div className="flex space-x-5 item-center text-lg lg:text-xl mt-3">
            <p className="font-semibold">₹3000</p>
            <p className="line-through opacity-50">₹4354</p>
            <p className="text-green-600 font-semibold">74 % off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 mt-4">
        <div className="flex items-center space-x-2 text-white">
          <IconButton>
            <RemoveCircleOutlineIcon
              sx={{
                color: "white", // Set icon color to white
              }}
            />
          </IconButton>
          <span className="py-1 px-7 rounded-sm items-center">3</span>
          <IconButton>
            <AddCircleOutlineIcon
              sx={{
                color: "white", // Set icon color to white
              }}
            />
          </IconButton>
        </div>
        <Button>Remove</Button>
      </div>
    </div>
  );
};

export default CartItem;
