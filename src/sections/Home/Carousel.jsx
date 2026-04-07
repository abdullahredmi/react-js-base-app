"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  Chip,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Slides data
const slides = [
  {
    id: 1,
    // subtitle: "India Premier Medical Fellowship Platform",
    title: "Medical fellowships done right.",
    description: "Join our fellowship programs designed to transform your career and make a lasting impact in your community.",
    buttonText: "Explore fellowship",
    buttonLink: "/apply",
    // linkText: "Get Online Certificate",
    // badges: ["Campus", "Online", "Global"],
    type: "image",
    mediaUrl: "https://picsum.photos/id/6/5000/3333",
    mobileMediaUrl: "https://picsum.photos/id/6/5000/3333",
  }
];

export default function HeroCarousel() {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    if (slides?.length > 1) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  // Reset video when slide changes
  useEffect(() => {
    if (videoRef.current && slides[activeIndex]?.type === "video") {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [activeIndex]);

  const renderMedia = (slide) => {
    const mediaUrl = window.innerWidth < 900 ? slide.mobileMediaUrl : slide.mediaUrl;
    
    if (slide.type === "video") {
      return (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={mediaUrl} type="video/mp4" />
        </video>
      );
    } else {
      return (
        <img
          src={mediaUrl}
          alt={slide.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      );
    }
  };

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "70vh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "#000",
      }}
    >
      {/* Background Media - Full Screen */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {renderMedia(slides[activeIndex])}
        </motion.div>
        
        {/* Gradient Overlay using theme colors */}
        {/* <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: {
              xs: `linear-gradient(135deg, ${theme.palette.primary.main}cc 0%, ${theme.palette.secondary.main}99 100%)`,
              md: `linear-gradient(90deg, ${theme.palette.primary.main}cc 0%, ${theme.palette.secondary.main}99 100%)`,
            },
          }}
        /> */}
      </Box>

      {/* Main Content Container - Text Overlay */}
    <Container 
        maxWidth="xl" 
        sx={{ 
          position: "relative", 
          zIndex: 2,
          px: { xs: 2, sm: 3, md: 16 }
        }}
      >
        <Box sx={{ 
          maxWidth: "600px", 
          mx: "auto",
          textAlign: { xs: "center", md: "center" }
        }}>
          
          {/* Hero Content Wrapper */}
          <Box>
            {/* Subtitle - Light Grey */}
            {/* <motion.div
              key={`subtitle-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                sx={{
                  color: "#e0e0e0",
                  fontFamily: "'Figtree', sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: 12, sm: 13, md: 14, lg: 16 },
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  mb: { xs: 4,  md: 6 },
                  display: "inline-block",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  px: { xs: 1.5, md: 2 },
                  py: { xs: 0.5, md: 0.75 },
                  borderRadius: 2,
                }}
              >
                {slides[activeIndex]?.subtitle}
              </Typography>
            </motion.div> */}

            {/* Title */}
            <motion.div
              key={`title-${activeIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: { 
                    xs: "4rem", 
                    md: "6rem", 
                  },
                  fontWeight: {xs: 500, md: 400},
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  mb: { xs: 1, sm: 1.5, md: 2 },
                  color: "#fff",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  // textAlign: 'left'
                }}
              >
                {slides[activeIndex]?.title}
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              key={`desc-${activeIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: { xs: "1.8rem", md: "2rem",},
                  color: "#e0e0e0",
                  // maxWidth: { xs: "100%", md: "80%", lg: "70%" },
                  mx: { xs: "auto", md: 0 },
                  mb: { xs: 2, sm: 2.5, md: 3 },
                  lineHeight: 1.6,
                  textAlign: 'center',
                  fontWeight: 400
                }}
              >
                {slides[activeIndex]?.description}
              </Typography>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1.5, sm: 2, md: 3 }}
                alignItems="center"
                justifyContent={{ xs: "center", md: "center" }}
                sx={{ mb: { xs: 2.5, sm: 3, md: 4 } }}
              >
                <Link to={slides[activeIndex]?.buttonLink || "/apply"} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: theme.palette.primary.contrastText,
                      color: "#000",
                      textTransform: "none",
                      fontWeight: 500,
                      fontSize: { xs: "2rem", md: "2rem", },
                      px: { xs: 10.5,  md: 4, },
                      py: { xs: 2.5,  md: 2.5, },
                      borderRadius: 2,
                      minWidth: { xs: "180px", sm: "auto" },
                      "&:hover": {
                        // backgroundColor: theme.palette.secondary.dark,
                        transform: "translateY(-2px)",
                        transition: "all 0.3s ease",
                      },
                    }}
                  >
                    {slides[activeIndex]?.buttonText}
                  </Button>
                </Link>

                {/* <Button
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: { xs: "1.8rem",  md: "2rem",  },
                    "&:hover": {
                      transform: "translateX(5px)",
                      transition: "transform 0.3s ease",
                    },
                  }}
                >
                  {slides[activeIndex]?.linkText}
                </Button> */}
              </Stack>
            </motion.div>

            {/* Badges */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 0.75, sm: 1, md: 1.5 },
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                {slides[activeIndex]?.badges.map((badge, i) => (
                  <Chip
                    key={i}
                    label={badge}
                    icon={
                        <CheckCircleIcon
                            sx={{
                            color: "#FFF",
                            backgroundColor: "#fff",
                            borderRadius: "50%",
                            fontSize: 20,
                            }}
                        />
                    }
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)",
                      color: "#fff",
                      fontFamily: "'Figtree', sans-serif",
                      fontWeight: 600,
                      fontSize: { xs: 14,  md: 14,  },
                      borderRadius: 5,
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.25)",
                        transform: "translateY(-2px)",
                        transition: "all 0.3s ease",
                      },
                    }}
                  />
                ))}
              </Box>
            </motion.div> */}
          </Box>
        </Box>
      </Container>

      {/* Carousel Indicators - Inside the image at bottom */}
      {slides.length > 1 && (
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ 
            position: "absolute",
            bottom: { xs: 20, sm: 25, md: 30, lg: 35 },
            left: 0,
            right: 0,
            zIndex: 3,
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveIndex(index)}
              sx={{
                width: { xs: 25, sm: 30, md: 35, lg: 40 },
                height: { xs: 3, sm: 3.5, md: 4 },
                borderRadius: 2,
                bgcolor: index === activeIndex ? theme.palette.primary.main : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: index === activeIndex ? theme.palette.primary.dark : "rgba(255,255,255,0.8)",
                  transform: "scaleY(1.2)",
                },
              }}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}