import axios from "axios";
import { config } from "./config";

const createApi = (baseURL) => {
  const api = axios.create({
    baseURL,
  });
  return api;
};

export const api = createApi(config.BASE_URL);
