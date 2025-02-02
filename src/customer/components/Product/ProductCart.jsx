import React from 'react'
import './ProductCart.css'
import { useNavigate } from 'react-router-dom'

const ProductCart = ({ product }) => {
  const { title, brand, imageUrl, price ,discountedPrice,color,discountPersent} = product;
  const navigate= useNavigate();

  // Navigate to the product details page when the card is clicked
  const handleNavigate = () => {
    navigate(`/product/${product?.id || product?._id || 2}`)
  };

  return (
    <div 
      onClick={handleNavigate} 
      className="productCart w-[15rem] m-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white rounded-lg shadow-lg transition-all cursor-pointer"
    >
      <div className="h-[20rem]">
        <img className="object-cover object-left-top h-full w-full" src={imageUrl} alt={title} />
      </div>
      <div className="textPart p-1">
        <p className="font-bold opacity-60">{brand}</p>
        <p>{title}</p>
        <p className='font-semibold opacity-50'>{color}</p>
      </div>
      <div className="font-semibold flex items-center space-x-4">
      <p className='font-semibold'>₹{discountedPrice}</p>
        <p className="line-through opacity-50">₹{price}</p>
        <p className="text-green-600">{discountPersent}% off</p>
      </div>
    </div>
  );
}

export default ProductCart;
