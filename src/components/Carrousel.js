import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import leftChevron from "../assets/images/Vector-left.svg";
import rightChevron from "../assets/images/Vector-right.svg";

function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      selectedItem={currentIndex}
      onChange={handleChange}
    >
      {images.map((image, index) => (
        <div className='carrouselPicture' key={index}>
          {images.length > 1 && (
            <div className="left-chevron" onClick={handlePrev}>
              <img src={leftChevron} alt="flêche gauche" className="leftArrow" />
            </div>
          )}
          <img src={image} alt="appartement" />
          {images.length > 1 && (
            <div className="right-chevron" onClick={handleNext}>
              <img src={rightChevron} alt="flêche droite" className="rightArrow" />
            </div>
          )}
          <div className="carousel-counter">{images.length > 1 ? `${currentIndex + 1}/${images.length}` : ''}</div>
        </div>
      ))}
    </Carousel>
  );
}

export default Carrousel;

