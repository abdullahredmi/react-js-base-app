"use client";

import React, { useRef } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Button,
  Chip,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIosNewRounded from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";
import { alpha } from "@mui/material/styles";

const data = [
  {
    id: 1,
    title: "Dr Arun kumar",
    badge: "Program",
    subtitle: "Chennai TN",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
  },
  {
    id: 2,
    title: "Dr Anandh",
    badge: "Training",
    subtitle: "Chennai TN",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
  {
    id: 3,
    title: "Dr Sanjay",
    badge: "Community",
    subtitle: "Chennai TN",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  },
  {
    id: 4,
    title: "Doctor Arun",
    badge: "Career",
    subtitle: "Chennai TN",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
  },
  {
    id: 5,
    title: "Innovation Lab",
    badge: "Startup",
    subtitle: "Chennai TN",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692",
    icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  },
];

export default function Doctors() {
  const scrollRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scroll = (direction) => {
    const scrollAmount = 320;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Box
        sx={{
            pt: {xs: 6, md: 10},
            pb: {xs: 6, md: 10},
            bgcolor: '#FFF',
        }}
        >
      <Container maxWidth={false} sx={{ maxWidth: "1200px" }}>
        
        {/* Header */}
        <Box textAlign="center" mb={6}>
            <Typography
            fontSize={{ xs: 35, md: 60 }}
            fontWeight={500}
            mb={4}
            color="text.secondary" lineHeight={1.3}
            >
            Learn from India's{" "}
            <Box
                component="span"
                sx={{ color: "secondary.main", fontStyle: 'italic' }}
            >
                finest doctors
            </Box>
            </Typography>

          <Typography color="text.secondary" fontSize={{xs: 20, md: 21}} lineHeight={1.3} maxWidth={950} mx="auto">
            Discover our fellowship programs designed to help you grow,
            connect.
          </Typography>
        </Box>

        {/* Scroll Section */}
        <Box position="relative">

          {/* Left Arrow - Desktop only */}
          {!isMobile && (
            <IconButton
              onClick={() => scroll("left")}
              sx={{
                position: "absolute",
                left: -60,
                top: "40%",
                zIndex: 2,
                background: theme.palette.secondary.main,
                color: "#fff",
                width: 45,
                height: 45,
                "&:hover": {
                  background: theme.palette.secondary.dark,
                },
              }}
            >
              <ArrowBackIosNewRounded fontSize="small" />
            </IconButton>
          )}

          {/* Cards */}
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {data.map((item) => (
              <CardItem key={item.id} item={item} />
            ))}
          </Box>

          {/* Right Arrow - Desktop only */}
          {!isMobile && (
            <IconButton
              onClick={() => scroll("right")}
              sx={{
                position: "absolute",
                right: -60,
                top: "40%",
                zIndex: 2,
                background: theme.palette.secondary.main,
                color: "#fff",
                width: 45,
                height: 45,
                "&:hover": {
                  background: theme.palette.secondary.dark,
                },
              }}
            >
              <ArrowForwardIosRounded fontSize="small" />
            </IconButton>
          )}

        </Box>

        {/* View All Button */}
        <Box textAlign="center" mt={{xs: 1, md: 6}}>
          <Button
            variant="contained"
            sx={{
              background: theme.palette.secondary.main,
              borderRadius: 3,
              textTransform: "none",
              px: 5,
              py: 2,
              fontWeight: 600,
              "&:hover": {
                background: theme.palette.secondary.dark,
              },
              fontSize: {xs: 20, md: 25}
            }}
          >
            View All 
          </Button>
        </Box>

      </Container>
    </Box>
  );
}

function CardItem({ item }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: { xs: "50%", md: "22%" },
        minWidth: { xs: "50%", md: "22%" },
        borderRadius: 4,
        overflow: "visible",
        background: "transparent",
        position: "relative",
        flexShrink: 0,
        mb: 5,
        border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
        
      }}
    >

      {/* Top Image */}
      <Box
        sx={{
          height: 240,
          borderRadius: "20px",
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: 1
          
        //   filter: "blur(2px) brightness(.8)",
        }}
      />

      {/* Icon Image Overlap */}
      <Box
        sx={{
        //   position: "absolute",
        //   top: 80,
        //   left: "50%",
        //   transform: "translateX(-50%)",
        //   zIndex: 10,
        borderBottom: `1px solid ${alpha(theme.palette.secondary.main, 0.08)}`,
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            // borderRadius: "50%",
            // background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={item.icon}
            style={{
              width: "60%",
              height: "60%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>

      {/* Bottom Card */}
      <Box
        sx={{
        //   background: "#fff",
          pt: 1,
          pb: 2,
          px: 2,
          borderRadius: "20px 20px 12px 12px",
          textAlign: "center",
        //   boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
          textAlign: 'left'
        }}
      >
        <Typography fontWeight={700} fontSize={{xs: 18, md: 20}} mb={0} textAlign={'left'} lineHeight={1.3}
            sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: 1.3,
                height: "2.6em",   // 2 lines fix
                wordBreak: "break-word",
            }}>
          {item.title}
        </Typography>

        <Chip
          label={item.badge}
          size="small"
          sx={{
            mb: 1,
            fontSize: {xs: 11, md: 12},
            background: `${alpha(theme.palette.secondary.main, 0.08)}`,
            color: theme.palette.secondary.main,
            textAlign: 'left'
          }}
        />

        <Typography fontSize={16} color="#666" textAlign={'left'}>
          {item.subtitle}
        </Typography>
      </Box>
    </Box>
  );
}