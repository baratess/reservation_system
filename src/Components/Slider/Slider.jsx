import React from "react";
import { useState } from "react";
import SliderItem from "../SliderItem/SliderItems";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  //   const nextSlide = () => {
  //     setCurrentSlide((prev) => (prev + 1) % 3);
  //   };
  //   const prevSlide = () => {
  //     setCurrentSlide((prev) => (prev + 2) % 3);
  //   };

  return (
    <section className="slider">
      <div className="slider-elements">
        {currentSlide === 0 && (
          <SliderItem imageSrc="https://www.demirdogramakonya.com/wp-content/uploads/2016/03/hali-saha-yapimi-100.jpg" />
        )}
        {/* {currentSlide === 1 && (
          <SliderItem imageSrc="https://www.ankarabasketbolokullari.com/cdn-cgi/image/width=1920,quality=75,format=auto/https://cdn.inofy.co/venue/6103/photo/img-20220127-wa0005.jpg" />
        )} */}
        {currentSlide === 1 && (
          <SliderItem imageSrc="http://davutpasarezervasyon.yildiz.edu.tr/images/Rezervasyon%C4%B0ptalResim.jpeg" />
        )}

        {/* <div className="slider-buttons">
          <button onClick={prevSlide}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button onClick={nextSlide}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div> */}
        <div className="slider-dots">
          <button
            className={`slider-dot ${currentSlide === 0 ? "active" : ""}`}
            onClick={() => setCurrentSlide(0)}
          >
            <span></span>
          </button>
          <button
            className={`slider-dot ${currentSlide === 1 ? "active" : ""}`}
            onClick={() => setCurrentSlide(1)}
          >
            <span></span>
          </button>
          {/* <button
            className={`slider-dot ${currentSlide === 2 ? "active" : ""}`}
            onClick={() => setCurrentSlide(2)}
          >
            <span></span>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Slider;
