import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';

const Homepage = () => {
  return (
    <div className="bg-gray-900 text-white
 min-h-screen"> {/* Black background and white text */}
      <MainCarousel />
      <div className="space-y-10 py-5 flex flex-col justify-center px-5 lg:px ">
        <HomeSectionCarousel sectionName="Top Search" />
        <HomeSectionCarousel sectionName="Men's T-Shirt"/>
      </div>
    </div>
  );
};

export default Homepage;
