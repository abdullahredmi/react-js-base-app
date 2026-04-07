import toastService from "../utils/toastService";
import { getToken, removeToken } from "../utils/tokenService"; 

// Setup interceptor
export const setupAxiosInterceptors = (axiosInstance) => {
  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        // Handle all status codes
        const status = error.response.status;
        const message =
          error.response?.data?.message ||
          error.response?.data?.error?.message ||
          "Server Error";

        if (status === 401 || status === 403) {
          // Unauthorized or forbidden
          toastService.error("Session expired. Please login again.");
          removeToken();
        //   localStorage.removeItem("token");
        //   localStorage.removeItem("tokenExpiry");
          window.location.href = "/login"; // Redirect
        } else if (status === 402) {
          toastService.error("Payment required.");
        } else if ([500, 502, 503, 504].includes(status)) {
          toastService.error("Server error. Please try later.");
        } else {
          toastService.error(message);
        }
      } else if (error.request) {
        toastService.error("No response from server");
      } else {
        toastService.error("Something went wrong");
      }

      return Promise.reject(error);
    }
  );
};