import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://theredgeek-api.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  // timeout, interceptors vs. burada eklenebilir
});

export default axiosInstance;
