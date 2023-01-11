import axios from "axios";

const baseUrl = {
  render: "https://draft-footz.onrender.com/",
  radmin: {
    RenanPC: "http://26.38.126.227:3001",
  },
  localhost: "http://localhost:3001",
};

export const api = axios.create({
  baseURL: baseUrl.localhost,
  timeout: 5000,
});
