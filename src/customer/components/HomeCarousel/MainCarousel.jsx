import React from 'react';
import { MainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <img
      className="cursor-pointer rounded-2xl shadow-lg transition-all duration-700 ease-in-out transform hover:scale-105"
      role="presentation"
      src={item.image}
      alt=""
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2500} // Adjusted for smoother flow
      infinite
      animationDuration={800} // Soft transition
      animationType="fadeout" // Fade effect for smoothness
      disableDotsControls
    />
  );
};

export default MainCarousel;
