import { api } from "../Api";

const getConfigurator = () => {
  return api
    .get("/page2.json", {})
    .then((response) => Promise.resolve(response.data));
};

export const configuratorApi = {
  getConfigurator,
};
