// src/routes/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth"; // your login check function

const PrivateRoute = ({ children }) => {
  // if user is not logged in, redirect to login
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  // otherwise render the children (the protected page)
  return children;
};

export default PrivateRoute;