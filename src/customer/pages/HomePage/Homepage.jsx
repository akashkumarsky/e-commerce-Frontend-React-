import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';


import HomeProductSection from '../../components/Home/HomeProductSection';
import { mens_kurta } from '../../../Data/Men/men_kurta';
import { mensShoesPage1 } from '../../../Data/shoes';
import { lengha_page1 } from '../../../Data/Women/LenghaCholi';
import { sareePage1 } from '../../../Data/Saree/page1';
import { dressPage1 } from '../../../Data/dress/page1';
import { gounsPage1 } from '../../../Data/Gouns/gouns';
import { kurtaPage1 } from '../../../Data/Kurta/kurta';



const Homepage = () => {
  return (
    <div className="bg-gray-900 text-white
 min-h-screen"> {/* Black background and white text */}
      <MainCarousel />
      <div className="space-y-10 py-5 flex flex-col justify-center px-5 lg:px ">
      <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
        <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
        {/* <HomeProductSection data={lengha_page1} section={"Lengha Choli"} /> */}
        <HomeProductSection data={sareePage1} section={"Saree"} />
        <HomeProductSection data={dressPage1} section={"Dress"} />
        <HomeProductSection data={gounsPage1} section={"Women's Gouns"} />
        <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} />        
      </div> 
    </div>
    
  );
};

export default Homepage;
