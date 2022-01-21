import axios from "axios";

const http = axios.create({
  baseURL: "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master",
});
export default http;
