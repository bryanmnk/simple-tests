import { api } from "../Api";

const getLinks = () => {
  return api
    .get("/app.json", {})
    .then((response) => Promise.resolve(response.data));
};

export const linksApi = {
  getLinks,
};
