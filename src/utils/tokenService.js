// src/utils/tokenService.js
import CryptoJS from "crypto-js";

const SECRET_KEY = "DocTutorials"; // Use env variable in production

// Save token with expiry
export const saveToken = (token, expiryMinutes = 30) => {
  const encryptedToken = CryptoJS.AES.encrypt(token, SECRET_KEY).toString();
  const expiryTime = new Date().getTime() + expiryMinutes * 60 * 1000;

  localStorage.setItem("token", encryptedToken);
  localStorage.setItem("tokenExpiry", expiryTime.toString());
};

// Get token (decrypt)
export const getToken = () => {
  const encryptedToken = localStorage.getItem("token");
  const expiry = localStorage.getItem("tokenExpiry");

  if (!encryptedToken || !expiry) return null;

  const now = new Date().getTime();
  if (now > parseInt(expiry)) {
    removeToken();
    return null;
  }

  const bytes = CryptoJS.AES.decrypt(encryptedToken, SECRET_KEY);
  const token = bytes.toString(CryptoJS.enc.Utf8);
  return token;
};

// Remove token
export const removeToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("tokenExpiry");
};

// Check if logged in
export const isLoggedIn = () => {
  return !!getToken();
};