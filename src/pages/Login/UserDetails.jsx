import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert, InputAdornment, IconButton
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { saveToken, getToken, removeToken, isLoggedIn } from "../../utils/tokenService";

export default function UserDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field dynamically
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (name === "fullName") {
        if (!value.trim()) newErrors.fullName = "Full name is required";
        else if (value.trim().length < 3) newErrors.fullName = "Name must be at least 3 characters";
        else delete newErrors.fullName;
      }

      if (name === "email") {
        if (!value.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) newErrors.email = "Please enter a valid email address";
        else delete newErrors.email;
      }

      return newErrors;
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = async () => {
    if (!validateForm()) return;

    setSubmitted(true);

    try {
      // Simulate API call
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              success: true,
              token: "new_dummy_token_abc123",
              expiry: new Date().getTime() + 30 * 60 * 1000, // 30 min expiry
            }),
          1500
        )
      );

      if (response.success) {
        // Remove old token if exists
        removeToken();
        saveToken(response.token, 30);
        // localStorage.removeItem("token");
        // localStorage.removeItem("tokenExpiry");

        // // Set new token
        // localStorage.setItem("token", response.token);
        // localStorage.setItem("tokenExpiry", response.expiry);

        setSaveSuccess(true);

        setSubmitted(false);

        // Navigate to next page
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setSubmitted(false);
      // Show error toast if needed
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF"
      }}
    >
      {/* TOP LEFT LOGO */}
      <Box sx={{ position: "absolute", top: "25px", left: "25px" }}>
        <img src="/img/favicon.ico" onClick={() => navigate("/")} alt="Venum" style={{ width: "120px" }} />
      </Box>

      {/* CENTER CONTENT - 50% WIDTH */}
      <Box
        sx={{
          width: {xs: '80%', md: '45%'},
          maxWidth: "1200px",
          minWidth: "300px",
          margin: "0 auto"
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: {xs: 1, md: 5},
            // borderRadius: "20px",
            backgroundColor: "#fff",
            boxShadow: "none"
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              mb: 2,
              textAlign: "center",
              color: "#000",
              fontWeight: 500,
              lineHeight: 1.3,
              fontSize: { xs: "3rem",  md: "4.5rem" }
            }}
          >
            Provide a few details <br></br> about you
          </Typography>

          {/* Description */}
          <Typography
            color="black"
            fontWeight={400}
            sx={{
              mb: 4,
              textAlign: "center",
              lineHeight: 1.3,
              fontSize: "1.8rem"
            }}
          >
            We'll use this to update your profile for all activities
          </Typography>

          {/* Success Message */}
          {saveSuccess && (
            <Alert
              severity="success"
              sx={{
                mb: 3,
                fontSize: 16,
                borderRadius: "8px",
                animation: "fadeIn 0.5s ease-out"
              }}
              onClose={() => setSaveSuccess(false)}
            >
              Details saved successfully!
            </Alert>
          )}

          {/* Submitting Message */}
          {submitted && !saveSuccess && (
            <Alert
              severity="info"
              sx={{
                mb: 3,
                fontSize: 16,
                borderRadius: "8px"
              }}
            >
              Saving your details...
            </Alert>
          )}

          {/* Full Name Field */}
          <Typography
            sx={{
              mb: 1,
              fontWeight: "medium",
              color: "#000",
              fontSize: 16,
              fontWidth: 400,
              textAlign: 'left'
            }}
          >
            Name
          </Typography>
          <TextField
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            fullWidth
            error={!!errors.fullName}
            helperText={errors.fullName}
            FormHelperTextProps={{
              sx: { fontSize: '14px', fontWeight: 500 } // Increase font size here
            }}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor: "#fafafa",
                fontSize: 18,
                fontWeight: 500,
                "&:hover fieldset": { borderColor: "#000" },
                "&.Mui-focused fieldset": { borderColor: "#000", borderWidth: "2px" }
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#000" }
            }}
            InputProps={{
              endAdornment: formData.fullName ? (
                <InputAdornment sx={{paddingRight: 1}} position="end">
                  <IconButton
                    onClick={() => setFormData({ ...formData, fullName: "" })}
                    edge="end"
              
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ) : null
            }}
          />

          {/* Email Field */}
          <Typography
            sx={{
              mb: 1,
              fontWeight: "medium",
              color: "#000",
              fontSize: 16,
              fontWeight: 400,
              textAlign: 'left'
            }}
          >
            Email Address
          </Typography>
          <TextField
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            fullWidth
            error={!!errors.email}
            helperText={errors.email}
            FormHelperTextProps={{
              sx: { fontSize: '14px', fontWeight: 500 } // Increase font size here
            }}
            sx={{
              mb: 4,
              "& .MuiOutlinedInput-root": {
                fontSize: 18,
                fontWeight: 500,
                borderRadius: "12px",
                backgroundColor: "#fafafa",
                "&:hover fieldset": { borderColor: "#000" },
                "&.Mui-focused fieldset": { borderColor: "#000", borderWidth: "2px" }
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#000" }
            }}
            InputProps={{
              endAdornment: formData.email ? (
                <InputAdornment position="end" sx={{paddingRight: 1}}>
                  <IconButton
                    onClick={() => setFormData({ ...formData, email: "" })}
                    edge="end"
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ) : null
            }}
          />

          {/* Save & Update Button */}
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={handleSubmit}
            disabled={
              submitted || !formData.fullName.trim() || !formData.email.trim() || Object.keys(errors).length > 0
            }
            sx={{
              backgroundColor: "black",
              color: "white",
              height: "52px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "12px",
              textTransform: "none",
              mb: 2,
              "&:hover": {
                backgroundColor: "#222",
                transform: "translateY(-2px)",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
              },
              "&.Mui-disabled": {
                backgroundColor: "#ccc",
                color: "#666"
              },
              transition: "all 0.3s ease"
            }}
          >
            {submitted ? "Saving..." : "Save & Update"}
          </Button>

          {/* Back Link */}
          <Button
            onClick={() => navigate("/")}
            sx={{
              color: "#666",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: "medium",
              "&:hover": {
                backgroundColor: "transparent",
                color: "black",
                textDecoration: "underline"
              }
            }}
            fullWidth
          >
            ← Go Back or Home
          </Button>
        </Paper>
      </Box>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Container>
  );
}