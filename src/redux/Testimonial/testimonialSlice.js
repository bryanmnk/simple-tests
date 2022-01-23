import { createSlice } from "@reduxjs/toolkit";
import { testimonialApi } from "../../Api/testimonial/testimonialApi";

const initialState = {
  testimonial: {},
  error: "",
};

export const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {
    setTestimonial: (state, { payload }) => {
      state.testimonial = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { setTestimonial, setError } = testimonialSlice.actions;

export const getTestimonial = () => async (dispatch) => {
  try {
    const testimonial = await testimonialApi.getTestimonial();
    dispatch(setTestimonial(testimonial.slider));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
