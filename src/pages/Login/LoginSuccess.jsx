import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Paper, Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function LoginSuccess() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Redirect after 3 seconds
    const redirectTimer = setTimeout(() => {
      navigate("/user-details");
    }, 2000);

    // Cleanup timers
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <Container
      maxWidth="xl"
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

      {/* CENTER CONTENT */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
          margin: "0 auto",
          animation: "fadeInUp 0.6s ease-out"
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 5,
            borderRadius: "24px",
            textAlign: "center",
            backgroundColor: "white",
            // boxShadow: "0 20px 35px -10px rgba(0,0,0,0.1)"
          }}
        >
          {/* Green Check Icon */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 3,
              animation: "scaleIn 0.5s ease-out"
            }}
          >
            <CheckCircleIcon
              sx={{
                fontSize: "120px",
                color: "#4caf50",
                filter: "drop-shadow(0 4px 8px rgba(76, 175, 80, 0.3))"
              }}
            />
          </Box>

          {/* Awesome Sign In Title */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "3rem", md: "4.5rem" },
              // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              backgroundClip: "text",
              lineHeight: 1.4,
              WebkitBackgroundClip: "text",
              color: "black"
            }}
          >
            Awesome Your're,<br></br>Sign In! ✨
          </Typography>

        </Paper>
      </Box>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.5);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </Container>
  );
}