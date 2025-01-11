import React from 'react'
import './ProductCart.css'

const ProductCart = ({product}) => {
  return (
    <div className=" productCart w-[15rem] m-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white rounded-lg shadow-lg transition-all cursor-pointer">
        <div className="h-[20rem]">
            <img className=" object-cover object-left-top h-full w-full " src={product.imageUrl} alt=""  />
        </div>
        <div className="textPart  p-1">
            <p className="font-bold opacity-60">{product.brand}</p>
            <p>{product.title}</p>
        </div>
        <div className="font-semibold flex items-center space-x-4">
            <p className="text-xl">₹{product.price}</p>
            <p className="line-through opacity-50">₹{product.r_price}</p>
            <p className="text-green-600">{product.discount}</p>
        </div>
    </div>
  )
}

export default ProductCart