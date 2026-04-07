"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme, useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { alpha } from "@mui/material/styles";

const gridItems = [
  {
    id: 1,
    title: "Medical",
    subtitle: "12 Programs",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=500&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Surgical",
    subtitle: "12 Programs",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=500&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Emergency",
    subtitle: "12 Programs",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop&auto=format",
  },
];

export default function Fellowship() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 2, md: 10 },
        background: alpha(theme.palette.secondary.main, 0.19),
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: "1300px", mx: "auto" }}>
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: "3rem", md: "6rem" },
              mb: { xs: 1, md: 5 },
              color: "#000",
              lineHeight: 1.4
            }}
          >
            Get Start with{" "}
            <Box
              component="span"
              sx={{ color: "secondary.main", fontStyle: "italic" }}
            >
              your fellowship
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#000",
              maxWidth: 600,
              mx: "auto",
              fontWeight: 400,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Choose From a wide range
          </Typography>
        </Box>

        {/* GRID */}
        <Grid
          container
          spacing={4}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(4, 1fr)",
            },
          }}
        >
          {gridItems.map((item, index) => (
            <Grid item key={item.id}>
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
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Box
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          background: "#fff",
          // height: 230,
        //   p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
          transition: "all .3s",
          "&:hover": {
            // border: `1px solid ${alpha(theme.palette.secondary.main, 0.8)}`,
            // backgroundColor: `${alpha(theme.palette.secondary.main, 0.02)}`,
            boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
          },
        }}
      >
        {/* TOP CONTENT */}
        <Box sx={{padding: 3}}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "2.6rem",
              color: "#1a2c3e",
              mb: 1,
              textAlign: 'left'
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              color: "#6c7a8a",
              fontSize: "1.6rem",
              textAlign: 'left'
            }}
          >
            {item.subtitle}
          </Typography>
        </Box>

        {/* BOTTOM SECTION */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          {/* ARROW */}
          <motion.div
            animate={{
              scale: isHovered ? 1.2 : 1,
              x: isHovered ? 6 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ padding: isDesktop ? 20 : 25, flexShrink: 0,  }}
          >
            <ArrowForwardIcon
              sx={{
                fontSize: "2.4rem",
                color: theme.palette.secondary.main,
              }}
            />
          </motion.div>

          {/* IMAGE */}
          <motion.img
            src={item.imageUrl}
            animate={{
              scale: isHovered ? 1.05 : 1,   // gentle zoom
              rotate: isHovered ? -4 : 0,    // slight rotation
              y: isHovered ? (isDesktop ? 10 : 0) : (isDesktop ? 60 : 10),       // normal la keela, hover la konjam mela
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              width: isDesktop ? 150 : 200,
              objectFit: "contain",
              transformOrigin: "bottom",
            }}
          />
            </Box>
          </Box>
        </motion.div>
  );
}