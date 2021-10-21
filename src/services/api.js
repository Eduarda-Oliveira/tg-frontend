import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.12:9001",
  responseType: 'json',
});

export default api;