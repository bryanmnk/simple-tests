import { api } from "../Api";

const getTestimonial = () => {
  return api
    .get("/page1.json", {})
    .then((response) => Promise.resolve(response.data));
};

export const testimonialApi = {
  getTestimonial,
};
