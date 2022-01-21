import axios from "axios";
import http from "./Api";

export const getData = (url) => {
  return http.get(
    `https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master${url}`
  );
};
