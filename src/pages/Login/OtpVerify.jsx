// src/pages/Login/OtpVerify.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { saveToken, getToken, removeToken, isLoggedIn } from "../../utils/tokenService";

export default function OTPVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timer, setTimer] = useState(30);
  const [errorMessage, setErrorMessage] = useState(""); // API error message
  const inputRefs = useRef([]);
  const { setOtpVerified, mobileNumber } = useAuth();

  useEffect(() => {
    if (!mobileNumber) navigate("/login"); // Guard
  }, [mobileNumber, navigate]);

  // Timer logic
  useEffect(() => {
    let interval;
    if (resendDisabled && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      setResendDisabled(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [resendDisabled, timer]);

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setErrorMessage(""); // clear error on input

      if (value && index < 5) inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = [...otp];
      pastedData.split("").forEach((v, i) => (newOtp[i] = v));
      setOtp(newOtp);
      inputRefs.current[Math.min(pastedData.length, 5)].focus();
      setErrorMessage("");
    }
  };

  const handleVerify = async () => {
    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      setErrorMessage("Please enter complete 6-digit OTP");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    // Simulate API call
    setTimeout(() => {
      // Example: API response
      const fakeApiResponse = otpValue === "123456"
        ? { success: true }
        : { success: false, message: "Invalid OTP. Please try again." };

      if (fakeApiResponse.success) {
        const token = "dummy_token_abc123";
        const expiryTime = new Date().getTime() + 30 * 60 * 1000;
        saveToken(token, 30);
        // localStorage.setItem("token", token);
        // localStorage.setItem("tokenExpiry", expiryTime);

        setOtpVerified(true);
        navigate("/success");
      } else {
        setErrorMessage(fakeApiResponse.message);
        // keep OTP fields filled
        inputRefs.current[0].focus();
      }
      setLoading(false);
    }, 1500);
  };

  const handleResend = () => {
    setResendDisabled(true);
    setTimer(30);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0].focus();
    setErrorMessage(""); // clear error
    console.log("Resending OTP...");
  };

  return (
    <Container
      maxWidth="xl"
      sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ position: "absolute", top: 25, left: 25 }}>
        <img
          src="/img/favicon.ico"
          onClick={() => navigate("/")}
          alt="Venum"
          style={{ width: "120px", cursor: "pointer" }}
        />
      </Box>

      <Box sx={{ width: "100%", maxWidth: 450, textAlign: "center", margin: "0 auto" }}>
        <Typography variant="h4" fontWeight={500} mt={4} mb={2} fontSize={{xs: 30, md: 40}}>
          Verify OTP
        </Typography>
        <Typography color="black" mb={6} fontWeight={400} fontSize={{xs: 14, md: 16}}>
          We've sent a 6-digit verification code to your mobile number
        </Typography>

        {/* OTP Inputs */}
        <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", mb: 2, flexWrap: "wrap" }}>
          {otp.map((digit, index) => (
            <TextField
              key={index}
              inputRef={(el) => (inputRefs.current[index] = el)}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              error={!!errorMessage} // show red border if error exists
              inputProps={{
                maxLength: 1,
                style: { textAlign: "center", fontSize: 24, fontWeight: "bold", padding: "12px 0" }
              }}
              sx={{
                width: {xs: 35, md: 55},
                "& .MuiOutlinedInput-root": {
                  borderRadius: {xs: 2, md: 4},
                  backgroundColor: "#f5f5f5",
                  "&:hover fieldset": { borderColor: !!errorMessage ? "red" : "#000" },
                  "&.Mui-focused fieldset": { borderColor: !!errorMessage ? "red" : "#000", borderWidth: 2 }
                }
              }}
            />
          ))}
        </Box>

        {/* API Error Message */}
        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2, borderRadius: 2, fontSize: "16px", fontWeight: 500 }}>
            {errorMessage}
          </Alert>
        )}

        {/* Verify Button */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleVerify}
          disabled={otp.join("").length < 6 || loading}
          sx={{
            backgroundColor: "black",
            color: "white",
            height: 50,
            fontSize: 16,
            borderRadius: 4,
            mb: 3,
            mt: 3,
            "&:hover": { backgroundColor: "#222" },
            "&.Mui-disabled": { backgroundColor: "#ccc" }
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Verify OTP"}
        </Button>

        {/* Resend OTP */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontSize: 12 }}>
            Didn't receive the code?
          </Typography>
          {resendDisabled ? (
            <Typography variant="body2" sx={{ fontWeight: "medium", color: "#666", fontSize: 14 }}>
              Resend code in {timer} seconds
            </Typography>
          ) : (
            <Button
              onClick={handleResend}
              sx={{ color: "black", fontWeight: "bold", textTransform: "none", fontSize: 14, "&:hover": { backgroundColor: "transparent", textDecoration: "underline" } }}
            >
              Resend OTP
            </Button>
          )}
        </Box>

        {/* Back to Login */}
        <Button
          onClick={() => navigate("/login")}
          sx={{ mt: 3, color: "#666", textTransform: "none", fontSize: 16, "&:hover": { backgroundColor: "transparent", color: "black" } }}
        >
          ← Back to Login
        </Button>
      </Box>
    </Container>
  );
}