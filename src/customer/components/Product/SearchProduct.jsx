import { Fragment, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { findProducts, searchProduct } from "../../../state/Product/Action";
import { Backdrop, CircularProgress, Pagination, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { ChevronDownIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import ProductCart from "./ProductCart";

export default function SearchProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { customersProduct } = useSelector((store) => store);
  const location = useLocation();
  const [isLoaderOpen, setIsLoaderOpen] = useState(false);

  useEffect(() => {
    if (keyword) {
      dispatch(searchProduct(keyword));
    } else {
      dispatch(findProducts({}));
    }
  }, [keyword, dispatch]);

  useEffect(() => {
    setIsLoaderOpen(customersProduct.loading);
  }, [customersProduct.loading]);

  const handleSearch = (e) => {
    const keyword = e.target.value.trim();
    dispatch(keyword.length > 0 ? searchProduct(keyword) : findProducts({}));
  };

return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-4">
                <h1 className="text-3xl font-bold text-white">Search Products</h1>
                <div className="relative w-full md:w-1/3 mt-3 md:mt-0 text-white border border-gray-300 rounded-md">  
                    <TextField 
                        className="text-white" 
                        fullWidth 
                        variant="outlined" 
                        label="Search product..." 
                        onChange={handleSearch}
                        InputLabelProps={{
                            style: { color: 'white'  },
                        }}
                        InputProps={{
                            style: { color: 'white' },
                        }}
                    />
                </div>
            </div>

            {/* Product Grid */}
            <motion.div layout className="w-full mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {customersProduct?.searchProducts?.map((item) => (
                        <motion.div key={item.id} whileHover={{ scale: 1.05 }}>
                            <ProductCart product={item} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
                <Pagination count={customersProduct.products?.totalPages} color="primary" />
            </div>
        </div>

        {/* Loader */}
        <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoaderOpen}>
            <CircularProgress color="inherit" />
        </Backdrop>
    </motion.div>
);
}
