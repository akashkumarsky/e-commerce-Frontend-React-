import Navigation from "./customer/components/navigation/Navigation";

import "./App.css";
import Homepage from "./customer/pages/HomePage/Homepage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";

function App() {
  return (
    <div className="">
       <Navigation />
{/* 
      <Homepage />
      <Product /> 
      <ProductDetails/>
      <Cart/> */}

      <Checkout/>

      <Footer />
    </div>
  );
}

export default App;
