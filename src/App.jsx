// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

// Courses
import CourseList from "./pages/Course/CourseList"; // list of courses
import CourseDetails from "./pages/Course/CourseDetails"; // dynamic course detail page
import Purchase from "./pages/Purchase/Purchase"; // purchase page

// Auth
import Login from "./pages/Login/Login";
import OtpVerify from "./pages/Login/OtpVerify";
import LoginSuccess from "./pages/Login/LoginSuccess";
import UserDetails from "./pages/Login/UserDetails";

// Routes & Context
import PrivateRoute from "./routes/PrivateRoute";
import { useAuth } from "./contexts/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { mobileNumber, otpVerified } = useAuth();
  const handleContextMenu = (e) => {
    e.preventDefault(); // disable right-click menu
    // alert("Right-click disabled!");
  };

  return (
    <div onContextMenu={handleContextMenu}>
    <Router>
      <Toaster
        position="top-center"
        toastOptions={{ style: { zIndex: 9999, fontSize: 15 } }}
      />
      <Routes>

        {/* ======================= AUTH PAGES ======================= */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route
            path="/otp"
            element={mobileNumber ? <OtpVerify /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/success"
            element={otpVerified ? <LoginSuccess /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/user-details"
            element={otpVerified ? <UserDetails /> : <Navigate to="/login" replace />}
          />
        </Route>

        {/* ======================= MAIN WEBSITE ======================= */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Courses */}
          <Route path="/courses" element={<CourseList />} /> 
          <Route path="/course/:courseId" element={<CourseDetails />} /> 

          {/* Protected Purchase */}
          <Route
            path="/purchase/:courseId"
            element={
              <PrivateRoute>
                <Purchase />
              </PrivateRoute>
            }
          />
        </Route>

        {/* ======================= FALLBACK ======================= */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;