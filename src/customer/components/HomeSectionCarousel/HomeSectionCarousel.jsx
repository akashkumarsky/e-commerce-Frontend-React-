import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { HomeSectionCardData } from "../HomeSectionCard/HomeSectionCardData";

const HomeSectionCarousel = ({sectionName}) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide
  const [isEnd, setIsEnd] = useState(false); // Track if at the end

  const responsive = {
    0: { items: 1 },
    480: { items: 2 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = HomeSectionCardData.map((item, index) => (
    <HomeSectionCard
      key={index}
      imageUrl={item.imageUrl}
      brand={item.brand}
      title={item.title}
    />
  ));

  const slidePrev = () => carouselRef.current?.slidePrev();
  const slideNext = () => carouselRef.current?.slideNext();

  // Sync the active index and determine if at the end or beginning
  const handleSlideChange = (e) => {
    const { item } = e;
    setActiveIndex(item);
    setIsEnd(item >= items.length - 1);
  };

  return (
    <div className="px-4 lg:px-8">
        <h2 className="text-2xl font-extrabold text-white-800 py-2 ">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          ref={carouselRef}
          onSlideChanged={handleSlideChange}
        />
        {/* Next Button */}
        {!isEnd && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50"
            sx={{
              position: "absolute",
              height: "3rem",
              width: "2rem",
              top: "50%",
              right: "0",
              transform: "translateY(-50%)",
              bgcolor: "#FFFFFF66",
              borderRadius: "10%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(180deg)", color: "white" }}
            />
          </Button>
        )}
        {/* Previous Button */}
        {activeIndex > 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50"
            sx={{
              position: "absolute",
              height: "3rem",
              width: "2rem",
              top: "50%",
              left: "0",
              transform: "translateY(-50%)",
              bgcolor: "#FFFFFF66",
              borderRadius: "10%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon sx={{ color: "white" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
