import { configureStore } from "@reduxjs/toolkit";
import { configuratorSlice } from "./Configurator/configuratorSlice";
import { testimonialSlice } from "./Testimonial/testimonialSlice";

const store = configureStore({
  reducer: {
    configurator: configuratorSlice.reducer,
    testimonial: testimonialSlice.reducer,
  },
});
export default store;
