import React, { useEffect } from "react";
import { Container } from "react-grid-system";
import { connect } from "react-redux";
import { getPageOneData } from "../redux/Testimonal/testimonalActions";

function TestimonialPage({ getPageData, pageData }) {
  const { title, reviews } = pageData.data;
  useEffect(() => {
    getPageData();
  }, []);
  console.log(reviews, "testimonal page data");
  return <Container className="sadads">Testimonial</Container>;
}

const mapStateToProps = (state) => {
  return {
    pageData: state.testimonal,
  };
};

const mapDispatchToProps = (dispacth) => {
  return {
    getPageData: () => dispacth(getPageOneData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TestimonialPage);
