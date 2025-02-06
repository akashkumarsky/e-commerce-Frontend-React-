import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../../../state/Cart/Action";

const CartItem = ({ item, showButton }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { cart } = useSelector(store => store) || { cart: { cartItems: [] } };

  const handleRemoveItemFromCart = () => {
    const data = { cartItemId: item?.id, jwt };
    dispatch(removeCartItem(data));
  };

  const handleUpdateCartItem = (num) => {
    const data = { data: { quantity: item.quantity + num }, cartItemId: item?.id, jwt };
  };

  return (
    <div className="p-5 shadow-lg rounded-md bg-gray-800 mt-2">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="h-full w-full object-top object-cover rounded-md"
            src={item?.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1 text-white">
          <p className="font-semibold">{item?.product?.title}</p>
          <p className="opacity-70">Size: {item?.size}, {item?.product?.color}</p>
          <p className="opacity-70 mt-2">Seller: {item?.product?.brand}</p>
          <div className="flex space-x-5 items-center text-lg lg:text-xl mt-3">
            <p className="font-semibold">₹{item?.product.discountedPrice}</p>
            <p className="line-through opacity-50">₹{item?.product.price}</p>
            <p className="text-green-500 font-semibold">{item?.product.discountPersent}% off</p>
          </div>
        </div>
      </div>

      {showButton && (
        <div className="lg:flex items-center lg:space-x-10 mt-4">
          <div className="flex items-center space-x-2 text-white">
            <IconButton
              onClick={() => handleUpdateCartItem(-1)}
              disabled={item?.quantity <= 1}
              color="primary"
            >
              <RemoveCircleOutlineIcon sx={{ color: "white" }} />
            </IconButton>
            <span className="py-1 px-7 rounded-sm items-center bg-gray-700 text-white">
              {item?.quantity}
            </span>
            <IconButton onClick={() => handleUpdateCartItem(1)} color="primary">
              <AddCircleOutlineIcon sx={{ color: "white" }} />
            </IconButton>
          </div>
          <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
            <Button onClick={handleRemoveItemFromCart} variant="outlined" sx={{ color: "white", borderColor: "gray" }}>
              Remove
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
