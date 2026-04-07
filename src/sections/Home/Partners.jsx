"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import { motion, useInView } from "framer-motion";

// Logo data - dynamic array format
const logos = [
  {
    id: 1,
    name: "Company 1",
    logoUrl: "https://via.placeholder.com/150x80/4CAF50/FFFFFF?text=Logo1",
    alt: "Company 1 Logo",
  },
  {
    id: 2,
    name: "Company 2",
    logoUrl: "https://via.placeholder.com/150x80/2196F3/FFFFFF?text=Logo2",
    alt: "Company 2 Logo",
  },
  {
    id: 3,
    name: "Company 3",
    logoUrl: "https://via.placeholder.com/150x80/FF9800/FFFFFF?text=Logo3",
    alt: "Company 3 Logo",
  },
  {
    id: 4,
    name: "Company 4",
    logoUrl: "https://via.placeholder.com/150x80/9C27B0/FFFFFF?text=Logo4",
    alt: "Company 4 Logo",
  },
  {
    id: 5,
    name: "Company 5",
    logoUrl: "https://via.placeholder.com/150x80/E91E63/FFFFFF?text=Logo5",
    alt: "Company 5 Logo",
  },
  {
    id: 6,
    name: "Company 6",
    logoUrl: "https://via.placeholder.com/150x80/00BCD4/FFFFFF?text=Logo6",
    alt: "Company 6 Logo",
  },
  {
    id: 7,
    name: "Company 7",
    logoUrl: "https://via.placeholder.com/150x80/FF5722/FFFFFF?text=Logo7",
    alt: "Company 7 Logo",
  },
  {
    id: 8,
    name: "Company 8",
    logoUrl: "https://via.placeholder.com/150x80/795548/FFFFFF?text=Logo8",
    alt: "Company 8 Logo",
  },
];

const LogoCarousel = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let scrollAmount = 0;
    const speed = 0.8; // Slower speed for smoother scroll
    let animationId;
    let lastTimestamp = 0;

    const scroll = (timestamp) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
        animationId = requestAnimationFrame(scroll);
        return;
      }

      // Throttle to ~60fps
      if (timestamp - lastTimestamp > 16) {
        if (scrollContainer && !isPaused) {
          scrollAmount += speed;
          scrollContainer.scrollLeft = scrollAmount;
          
          // Reset scroll when reaching the end
          if (scrollAmount >= scrollContainer.scrollWidth / 3) {
            scrollAmount = 0;
            scrollContainer.scrollLeft = 0;
          }
        }
        lastTimestamp = timestamp;
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        width: "100%",
        py: { xs: 4,  md: 5 },
        bgcolor: "#ffffff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontFamily: "'Figtree', sans-serif",
              fontWeight: 600,
              color: "#666",
              mb: { xs: 3, sm: 4, md: 5 },
              letterSpacing: "0.5px",
            }}
          >
            30+ Parners Hospitals
          </Typography>
        </motion.div>
      </Container>

      {/* Scrolling Logos Container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: { xs: "40px", sm: "80px", md: "120px" },
            height: "100%",
            background: `linear-gradient(90deg, #f8f9fa, transparent)`,
            zIndex: 2,
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: { xs: "40px", sm: "80px", md: "120px" },
            height: "100%",
            background: `linear-gradient(270deg, #f8f9fa, transparent)`,
            zIndex: 2,
            pointerEvents: "none",
          },
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: { xs: 3, sm: 4, md: 6 },
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            whiteSpace: "nowrap",
            py: { xs: 2, sm: 3, md: 4 },
            cursor: "grab",
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`${logo.id}-${index}`}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              style={{
                flex: "0 0 auto",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  width: { xs: "110px", sm: "130px", md: "150px" },
                  height: { xs: "55px", sm: "65px", md: "75px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#fff",
                  borderRadius: 2,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <img
                  src={logo.logoUrl}
                  alt={logo.alt}
                  style={{
                    maxWidth: "80%",
                    maxHeight: "80%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LogoCarousel;