import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.data.message) {
      error.message = error.response.data.message;
    }

    return Promise.reject(error);
  },
);
