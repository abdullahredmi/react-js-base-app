import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import theme from "../../theme";

const exploreData = [
  {
    title: "Cardiology",
    description:
      "Advance your expertise in cardiovascular care with structured fellowship training.",
  },
  {
    title: "Orthopedics",
    description:
      "Gain hands-on clinical skills in musculoskeletal diagnosis and surgical assistance.",
  },
  {
    title: "Dermatology",
    description:
      "Develop advanced knowledge in cosmetic and clinical dermatology practices.",
  },
  {
    title: "Neurology",
    description:
      "Learn diagnostic and treatment approaches for complex neurological disorders.",
  },
];

const Explore = () => {
  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(
          to bottom,
          ${theme.palette.secondary.main}40,
          ${theme.palette.secondary.main}10
        )`,
      }}
    >
      <Container maxWidth="lg">

        {/* Header */}
        <Typography
          sx={{
            fontSize: 36,
            fontWeight: 600,
            textAlign: "center",
            mb: 2,
            lineHeight: 1.2,
            color: '#000'
          }}
        >
          Your path to fellowships, <br></br>starts here.
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontSize: 18,
            color: "#000",
            mb: 6,
            maxWidth: 700,
            mx: "auto",
            lineHeight: 1.2
          }}
        >
          Next batch April 30, 2026 deadline
        </Typography>

        {/* Cards Row */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          {exploreData.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "100%",
                  md: "23%",
                },
                bgcolor: "#fff",
                borderRadius: 3,
                p: 3,
                cursor: "pointer",
                transition: "all 0.25s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                },
              }}
            >
              {/* Title Row */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                  {item.title}
                </Typography>

                <ArrowOutwardIcon
                  sx={{
                    color: theme.palette.primary.contrastText,
                    fontSize: 40, borderRadius:10, padding: 1,
                    background: theme.palette.secondary.main,
                  }}
                />
              </Box>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: 16,
                  color: "#000",
                  lineHeight: 1.5,
                  fontWeight: 400,
                  textAlign: 'left', mt: 4, mb:0
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default Explore;