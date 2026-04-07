"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

const data = [
  {
    id: 1,
    title1: "Industry Leading Programs",
    description1:
      "Gain real clinical exposure with structured fellowship programs designed for modern doctors.",
    title2: "Industry Leading Programs",
    description2:
      "Gain real clinical exposure with structured fellowship programs designed for modern doctors.",
    subtitle: "Industry",
    image:
    "https://images.unsplash.com/photo-1516549655169-df83a0774514",
  },
   {
    id: 2,
    title1: "Industry Leading Programs",
    description1:
      "Gain real clinical exposure with structured fellowship programs designed for modern doctors.",
    title2: "Industry Leading Programs",
    description2:
      "Gain real clinical exposure with structured fellowship programs designed for modern doctors.",
    subtitle: "Industry",
    image:
    "https://images.unsplash.com/photo-1516549655169-df83a0774514",
  },
  {
    id: 3,
    title1: "Industry Leading Programs",
    description1:
      "Gain real clinical exposure with structured fellowship programs designed for modern doctors.",
    title2: "Industry Leading Programs",
    description2:
      "Gain real clinical exposure with structured fellowship programs designed for modern doctors.",
    subtitle: "Industry",
    image:
    "https://images.unsplash.com/photo-1516549655169-df83a0774514",
  },
];

export default function WhyDoctutorials() {
  const theme = useTheme();

  return (
    <Box py={10} bgcolor={'#FFF'}>
      <Container maxWidth={false} sx={{ maxWidth: "1300px", mx: "auto" }}>

        {/* Static Header */}
        <Box mb={8} textAlign="center">
        <Typography fontSize={{ xs: 44, md: 60 }} fontWeight={600} lineHeight={1.5}>
            Why{" "}
            <Box
                component="span"
                sx={{
                color: "secondary.main",
                fontStyle: "italic",
                }}
            >
                Doctutorials
            </Box>
            </Typography>

          <Typography
            color="text.secondary"
            fontSize={{ xs: 20, md: 25 }}
            maxWidth={900}
            mx="auto" lineHeight={1.3}
          >
            We connect doctors with top hospitals and training opportunities
            across India.
          </Typography>
        </Box>

        {/* Cards */}
        <Box display="flex" flexDirection="column" gap={4}>
          {data.map((item) => (
            <Box
              key={item.id}
              sx={{
                border: `1px solid ${alpha(theme.palette.secondary.main, 0.15)}`,
                borderRadius: 4,
                overflow: "hidden",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                // alignItems: "center",
                gap: { xs: 4, md: 0 },
                background: "#fff",
              }}
            >

              {/* LEFT CONTENT */}
                <Box flex={1}>
                    <Box textAlign="left" p={{ xs: 4, md: 8 }}>

                        <Typography
                        fontSize={{ xs: 22, md: 18 }}
                        fontWeight={500}
                        mb={1} textAlign="left"
                        >
                        {item.title1} ---
                        </Typography>

                        <Typography
                        color="text.secondary"
                        lineHeight={1.4}
                        mb={3} textAlign="left"
                        fontSize={20}
                        >
                        {item.description1}
                        </Typography>

                        <Box
                        sx={{
                            width: "100%",
                            maxWidth: 680,
                            height: 1.4,
                            bgcolor: alpha(theme.palette.secondary.main, 0.2),
                            mb: 3,
                            borderRadius: 2
                        }}
                        />

                        <Typography
                        fontSize={{ xs: 22, md: 18 }}
                        fontWeight={500}
                        mb={1}textAlign="left"
                        >
                        {item.title2} ---
                        </Typography>

                        <Typography
                        fontSize={{ xs: 18, md: 22 }}
                        pl={4}
                        mt={3}
                        fontWeight={700}
                        mb={1}textAlign="left"
                        color="#000"
                        >
                        {item.subtitle}
                        </Typography>

                        <Typography
                        color="text.secondary"
                        lineHeight={1.7}
                        fontSize={20}
                        pl={4}textAlign="left"
                        >
                        {item.description2}
                        </Typography>

                    </Box>
                </Box>

              {/* RIGHT IMAGE */}
              <Box
                flex={0.7}
                sx={{
                  width: "100%",
                //   height: { xs: 240, md: 420 },
                  overflow: "hidden",
                //   borderRadius: '20px 0px 20px 0px',
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>

            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}