
import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderHistory } from '../../../state/Order/Action'

const orderStatus = [
    { lable: "On The Way", value: "on_the_way" },
    { lable: "Delivered", value: "delivered" },
    { lable: "Cancelled", value: "cancelled" },
    { lable: "Returned", value: "returned" },

]
const Order = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { order } = useSelector(store => store);

    useEffect(() => {
        dispatch(getOrderHistory({ jwt }));
    }, [jwt]);

    return (
        <div className='px:5 lg:px-20 p-5  bg-gray-900 shadow-md shadow-white hover:shadow-2xl text-white '>
            <Grid container sx={{ justifyContent: "space-between" }}>

                <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg bg-gray-900 text-white p-5 sticky top-5'>
                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-4 mt-10'>
                            <h1 className='font-semibold'>OREDER STATUS</h1>
                            {orderStatus.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                    <input
                                        //   id={`filter-${section.id}-${optionIdx}`}
                                        //   name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                        //   htmlFor={`filter-${section.id}-${optionIdx}`}
                                        className="ml-3 text-sm text-gray-600"
                                    >
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>

                <Grid className='space-y-5' item xs={9}>
                {order.orders?.length>0 && order.orders?.map((order )=> {
              return order?.orderItems?.map((item,index)=> <OrderCard item={item} order={order} />)
            })}

                </Grid>
            </Grid>
        </div>
    )
}

export default Order