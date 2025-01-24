import React from 'react'
import Navigation from '../customer/components/navigation/Navigation'
import Cart from '../customer/components/Cart/Cart'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../customer/pages/HomePage/Homepage'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import AuthModel from '../customer/components/auth/AuthModel'

const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>
  
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
                <Route path='/product/:productId' element={<ProductDetails />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/account/order' element={<Order />}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
                <Route path='/model' element={<AuthModel />}></Route>
                

            </Routes>

          <div>
            <Footer/>
        </div>  

        </div>
    )
}

export default CustomerRouters