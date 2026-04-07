// // src/utils/auth.js

// export const isLoggedIn = () => {
//   const token = localStorage.getItem("token");
//   return !!token;
// };

// src/utils/auth.js
// import toastService from "./toastService";

// export const isLoggedIn = () => {
//   const token = localStorage.getItem("token");
//   const expiry = localStorage.getItem("tokenExpiry");

//   if (!token || !expiry) return false;

//   const now = new Date().getTime();
//   if (now > parseInt(expiry)) {
//     // Token expired
//     toastService.warning("Session expired, please login again."); 
//     localStorage.removeItem("token");
//     localStorage.removeItem("tokenExpiry");
//     return false;
//   }

//   return true;
// };
import { getToken } from "../utils/tokenService"; 

export const isLoggedIn = () => {
  const tokenData = getToken(); // decrypts internally
  // console.log("descrptToken", tokenData);
  if (!tokenData) return false; // token missing or expired

  return true;
};