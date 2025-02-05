import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCart.css";

const ProductCart = ({ product }) => {
  const { title, brand, imageUrl, price, discountedPrice, color, discountPersent } = product;
  const navigate = useNavigate();

  // Navigate to the product details page when the card is clicked
  const handleNavigate = () => {
    navigate(`/product/${product?.id || product?._id || 2}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="productCart w-[15rem] m-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 
                 text-white rounded-lg shadow-lg cursor-pointer transform transition duration-300 
                 hover:scale-105 hover:shadow-2xl"
    >
      {/* Image Section */}
      <div className="h-[20rem] overflow-hidden rounded-t-lg">
        <img
          className="object-cover object-center h-full w-full transition-transform duration-300 hover:scale-110"
          src={imageUrl}
          alt={title}
        />
      </div>

      {/* Product Details */}
      <div className="textPart pt-0 pb-2 p-4">
        <p className="font-bold opacity-60 truncate">{brand}</p>
        <p className="text-lg font-medium truncate">{title}</p>
        

        {/* Price & Discount Section */}
        <div className="flex items-center space-x-4 font-semibold">
          <p className="text-lg">₹{discountedPrice}</p>
          <p className="line-through opacity-50 text-sm">₹{price}</p>
          <p className="text-green-500 text-sm">{discountPersent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
