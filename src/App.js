import Navigation from "./customer/components/navigation/Navigation";

import "./App.css";
import Homepage from "./customer/pages/HomePage/Homepage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="">
       <Navigation />

      <Homepage />
      <Product /> 
      <ProductDetails/>

      <Footer />
    </div>
  );
}

export default App;
