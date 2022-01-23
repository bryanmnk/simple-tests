import axios from "axios";
import { config } from "./config";
// const http = axios.create({
//   baseURL: "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master",
// });
// export default http;

const createApi = (baseURL) => {
  const api = axios.create({
    baseURL,
  });
  return api;
};

export const api = createApi(config.BASE_URL);
