import { Grid } from '@mui/material';
import React, { useState } from 'react';

const OrderCard = () => {
    const [showDeliveryDate, setShowDeliveryDate] = useState(true);

    // Toggle between Delivery Date and Expected Delivery Date
    const toggleDate = () => {
        setShowDeliveryDate((prev) => !prev);
    };

    return (
        <div className='bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white rounded-lg shadow-lg transition-all cursor-pointer'>
            <Grid container spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                {/* First Column: Product Details */}
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img
                            className="h-[5rem] w-[5rem] object-cover object-top"
                            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/e/e/a/m-sksh-abc-120-pcbl-fubar-original-imah2z78caemhu95.jpeg?q=70"
                            alt=""
                        />
                        <div className="ml-5 space-y-2">
                            <p>Men Slim Mid Rise Black Jeans</p>
                            <p className="opacity-50 text-xs font-semibold">Size: M</p>
                            <p className="opacity-50 text-xs font-semibold">Color: Black</p>
                        </div>
                    </div>
                </Grid>

                {/* Second Column: Price */}
                <Grid item xs={3}>
                    <div className="text-center">
                        <p className="text-lg font-semibold">₹1,299</p>
                        <p className="opacity-50 text-xs">Inclusive of all taxes</p>
                    </div>
                </Grid>

                {/* Third Column: Delivery Details */}
                <Grid item xs={3}>
                    <div className="text-center">
                        <p
                            className="font-semibold opacity-70 text-sm cursor-pointer"
                            onClick={toggleDate}
                        >
                            {showDeliveryDate ? (
                                <span>Expected Delivery: 16th January 2025</span>
                            ) : (

                                <span>Delivery Date: 15th January 2025</span>
                            )}
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default OrderCard;
