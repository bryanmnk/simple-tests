import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

function CarouselComponent({ reviews }) {
  const [index, setIndex] = useState(0);
  const prevSlide = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  const nextSlide = () => {
    if (index < reviews.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="carouselWrapper">
      {reviews ? (
        <>
          <Carousel controls={false} activeIndex={index} indicators={false}>
            {reviews.map((review, i) => {
              return (
                <Carousel.Item key={i}>
                  <div className="carouselSlide">
                    <div className="carouselInfo">
                      <span className="carouselInfo__name">{review.name}</span>
                      <q className="carouselInfo__position">
                        {review.position}
                      </q>
                    </div>

                    <span className="carouselInfo__comment">
                      <q>{review.comment}</q>
                    </span>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div className="carouselControl">
            <p className="carouselControl__counter">
              {index + 1}/{reviews ? reviews.length : ""}
            </p>
            <div className="carousel__buttons">
              <button className="carouselControl__button" onClick={prevSlide}>
                <HiOutlineArrowLeft className="button__icon" />
              </button>
              <button className="carouselControl__button" onClick={nextSlide}>
                <HiOutlineArrowRight className="button__icon" />
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default CarouselComponent;
