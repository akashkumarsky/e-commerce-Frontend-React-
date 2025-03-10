import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => navigate(`/${product?.topLavelCategory}/${product?.secondLavelCategory}/${product?.thirdLavelCategory}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`cursor-pointer bg-gradient-to-b from-transparent to-white/30 rounded-lg shadow-md w-48 p-3 transition-transform duration-200 ${
        isHovered ? "scale-105" : "scale-100"
      }`}
    >
      <img
        className="w-full h-48 object-cover rounded-md"
        src={product?.imageUrl || product?.image}
        alt={product?.title}
      />
      <h3 className="text-lg font-semibold mt-2 text-white opacity-80">
        {product?.brand || "No Brand"}
      </h3>
      <p className="text-sm text-gray-400">
        {product?.title?.length > 20 
          ? `${product?.title.substring(0, 20)}...` 
          : product?.title}
      </p>
      
      <p className="text-sm font-semibold text-white opacity-70 mt-2">₹{product?.discountedPrice}</p>
    </div>
  );
};

export default HomeProductCard;
