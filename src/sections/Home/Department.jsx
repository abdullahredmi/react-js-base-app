"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { alpha } from "@mui/material/styles";

const gridItems = [
  {
    id: 1,
    title: "Medical",
    subtitle:
      "12 Programs",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=500&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Surgical",
    subtitle:
      "12 Programs",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=500&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Emergency",
    subtitle:
      "12 Programs",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop&auto=format",
  }
];

export default function FeatureGrid() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 2, md: 4 },
        background: "#ffffff",
        position: "relative",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: "1300px", mx: "auto" }}>
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* <Chip
              label="Fellowship Program Across"
              sx={{
                bgcolor: "#f5f5f5",
                color: theme.palette.secondary.main,
                fontWeight: 700,
                letterSpacing: 1.2,
                mb: 2,
                px: 2,
                py: 0.5,
                fontSize: "0.75rem",
              }}
            /> */}
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs: "3rem", md: "6rem" },
                mb: {xs: 1, md: 3},
                color: "#bbaeae",
                lineHeight: 1.2
                // letterSpacing: "-0.02em",
              }}
            >
            Fellowship Programs Across
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs: "3.5rem", md: "5.5rem" },
                mb: {xs: 2.5, md: 3.5},
                color: "secondary.main",
                letterSpacing: "-0.02em",
                fontStyle: "italic"
              }}
            >
              every department
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                color: "#9aa3aa",
                maxWidth: 600,
                mx: "auto",
                fontSize: { xs: "2rem", md: "2.5rem" },
                lineHeight: 1.6,
              }}
            >
              Choose From a wide range
            </Typography>
          </motion.div>
        </Box>

        {/* Responsive Grid */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 3 },
          }}
        >
          {gridItems.map((item, index) => (
            <Grid item key={item.id} sx={{ width: "100%" }}>
              <FeatureCard item={item} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function FeatureCard({ item, index }) {
  const theme = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ height: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          borderRadius: 4,
          overflow: "hidden",
          background: "#ffffff",
          height: { xs: 220, md: 230 },
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          position: "relative",
          border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
          "&:hover": {
            border: `1px solid ${alpha(theme.palette.secondary.main, 0.8)}`,
            backgroundColor: `${alpha(theme.palette.secondary.main, 0.02)}`,
            boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
          },
        }}
      >
        {/* Left Text Section */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 2, sm: 2.5, md: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.2rem", md: "3rem" },
                mb: 1,
                color: "#1a2c3e",
                lineHeight: 1.3,
                textAlign: 'left'
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                color: "#6c7a8a",
                fontSize: { xs: "1.5rem",  md: "2rem" },
                lineHeight: 1.5,
                textAlign: 'left'
              }}
            >
              {item.subtitle}
            </Typography>
          </Box>

          {/* Animated Arrow - zoom effect on hover */}
          <motion.div
            animate={{
              scale: isHovered ? 1.2 : 1,
              x: isHovered ? 6 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <ArrowForwardIcon
              sx={{
                color: theme.palette.secondary.main,
                fontSize: { xs: "2rem", sm: "2.5rem" },
                transition: "color 0.3s ease",
              }}
            />
          </motion.div>
        </Box>

        {/* Right Image Section */}
        <Box
        sx={{
            width: "45%",
            overflow: "hidden",
            position: "relative",
            // background: "#fff",
            display: "flex",
            alignItems: "flex-end", // image bottom la irukkum
            justifyContent: "center",
        }}
        >
        {/* <motion.img
            src={item.imageUrl}
            animate={{
            scale: isHovered ? 1.15 : 1,
            y: isHovered ? -10 : 0, // bottom → top move
            }}
            transition={{
            duration: 0.5,
            ease: "easeOut",
            }}
            style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            transformOrigin: "bottom", // zoom bottom la start aagum
            }}
        /> */}

          <motion.img
                    src={item.imageUrl}
                    animate={{
                      scale: isHovered ? 1.05 : 1,   // gentle zoom
                      rotate: isHovered ? -6 : 0,    // slight rotation
                      y: isHovered ? 5 : 20,       // normal la keela, hover la konjam mela
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                      width: 150,
                      objectFit: "contain",
                      transformOrigin: "bottom",
                    }}
                  />
        </Box>
      </Box>
    </motion.div>
  );
}