import axios from "axios";
import toastService from "../utils/toastService";
import { setupAxiosInterceptors } from "./axiosInterceptor";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:1337/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Apply the interceptor
setupAxiosInterceptors(api);

// Common error handler
const handleError = (error) => {
  if (error.response) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error?.message ||
      "Server Error";
    toastService.error(message);
  } else if (error.request) {
    toastService.error("No response from server");
  } else {
    toastService.error("Something went wrong");
  }
  throw error;
};

// GET
export const get = async (url, params = {}) => {
  try {
    const res = await api.get(url, { params });
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

// POST
export const post = async (url, data = {}) => {
  try {
    const res = await api.post(url, data);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

// PUT
export const put = async (url, data = {}) => {
  try {
    const res = await api.put(url, data);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

// DELETE
export const remove = async (url) => {
  try {
    const res = await api.delete(url);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export default api;