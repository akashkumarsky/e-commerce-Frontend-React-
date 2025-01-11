
import Navigation from './customer/components/navigation/Navigation';

import './App.css';
import Homepage from './customer/pages/HomePage/Homepage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';



function App() {
  return (
    <div className="">
      
      <Navigation/>
      
   
    
    <Homepage/>
    <Product/>
    
    <Footer/>
    </div>
  );
}

export default App;
