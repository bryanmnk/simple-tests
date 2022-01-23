import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonial } from "../redux/Testimonial/testimonialSlice";
// componentes
import CarouselComponent from "../components/CarouselComponent";
import Loader from "../components/Loader";
import { toastComponent } from "../components/Toast";

function TestimonialPage() {
  const dispacth = useDispatch();
  const testimonial = useSelector((state) => state.testimonial.testimonial);
  const error = useSelector((state) => state.testimonial.error);

  useEffect(() => {
    dispacth(getTestimonial());
  }, [dispacth]);
  if (error) {
    toastComponent(error);
  }

  return (
    <>
      {Object.keys(testimonial).length === 0 ? (
        <Loader />
      ) : (
        <Container className="testimonalPage">
          <h2 className="page__heading  ">{testimonial.title}</h2>
          <Row className="justify-content-center">
            <CarouselComponent reviews={testimonial.reviews} />
          </Row>
        </Container>
      )}
    </>
  );
}

export default TestimonialPage;
