import AliceCarousel from "react-alice-carousel";
import HomeProductCard from "./HomeProductCard";
import { Button } from "@mui/material";
import { useState, useRef } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HomeProductSection = ({ section, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  
  // Calculate total items and max index
  const totalItems = data.length;
  const visibleItems = 5.5; // Adjust based on screen size
  const maxIndex = Math.max(totalItems - visibleItems, 0);

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
      setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
    }
  };

  const items = data?.map((item, index) => (
    <div key={index}>
      <HomeProductCard product={item} />
    </div>
  ));

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-extrabold text-white py-5">{section}</h2>
      <div className="relative border p-5">
        <AliceCarousel
          ref={carouselRef}
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
          responsive={{
            0: { items: 2 },
            568: { items: 3 },
            1024: { items: visibleItems },
          }}
          stagePadding={{ paddingLeft: 50, paddingRight: 50 }} // Center align cards
          infinite={false} // Prevents extra empty space
          animationType="fadeout"
          animationDuration={800}
        />

        {/* Right Arrow (Hide when at the end) */}
        {activeIndex < maxIndex && (
          <Button
            onClick={slideNext}
            variant="contained"
            sx={{
              position: "absolute",
              top: "50%",
              right: "-2rem",
              backgroundColor: "white",
              color: "black",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
        )}

        {/* Left Arrow (Hide when at the start) */}
        {activeIndex > 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            sx={{
              position: "absolute",
              top: "50%",
              left: "-2rem",
              backgroundColor: "white",
              color: "black",
              transform: "translateY(-50%) rotate(180deg)",
              zIndex: 10,
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeProductSection;
