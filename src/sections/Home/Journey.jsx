import React, { useState } from "react";
import { Box, Container, Typography, Tabs, Tab, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import theme from "../../theme";

const journeyData = [
  { category: "campus immersion", label: "Introduction to Fellowship" },
  { category: "campus immersion", label: "Clinical Orientation" },
  { category: "campus immersion", label: "Hands-on Patient Exposure" },
  { category: "campus immersion", label: "Mentorship Sessions" },
  { category: "campus immersion", label: "Research Methodology" },
  { category: "campus immersion", label: "Case Discussions" },
  { category: "campus immersion", label: "Advanced Clinical Skills" },
  { category: "campus immersion", label: "Final Assessment" },

  { category: "online certification", label: "Online Orientation" },
  { category: "online certification", label: "Virtual Case Discussions" },
  { category: "online certification", label: "Recorded Lectures" },
  { category: "online certification", label: "Live Mentorship" },
  { category: "online certification", label: "Assignments" },
  { category: "online certification", label: "Interactive Webinars" },
  { category: "online certification", label: "Skill Assessments" },
  { category: "online certification", label: "Certification" },
];

const Journey = () => {

  // Get unique categories for tabs
  const categories = [...new Set(journeyData.map(item => item.category))];

  const [tab, setTab] = useState(categories[0]);

  // Filter data based on tab
  const filteredData = journeyData.filter(item => item.category === tab);

  return (
    <Box sx={{ py: 10, bgcolor: "#fff" }}>
      <Container maxWidth="lg">

        {/* HEADER */}
        <Typography sx={{ fontSize: 40, fontWeight: 500, textAlign: "center", mb: 6, lineHeight: 1.2 }}>
          For <span style={{ color: theme.palette.secondary.main }}>every</span> fellowship journey
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#000",
            fontSize: 18,
            mb: 6,
            maxWidth: 400,
            lineHeight: 1.3,
            mx: "auto",
          }}
        >
          Follow the structured pathway designed to help doctors gain practical.
        </Typography>

        {/* Dynamic Tabs */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
          <Tabs
            value={tab}
            onChange={(e, v) => setTab(v)}
            textColor="secondary"
            // indicatorColor="secondary"
            TabIndicatorProps={{ style: { display: "none" } }}
            sx={{border: `1px solid ${theme.palette.secondary.light}40`, padding: 0.5, borderRadius: 2}}
          >
            {categories.map((cat) => (
              <Tab
                key={cat}
                value={cat}
                label={cat.charAt(0).toUpperCase() + cat.slice(1)}
                sx={{
                  fontSize: 16,
                  px: 4,
                  borderRadius: 2,
                  color: '#000',
                  "&.Mui-selected": {
                    bgcolor: `${theme.palette.secondary.main}20`,
                    color: theme.palette.secondary.main,
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* TABLE GRID */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            borderLeft: `1px solid ${theme.palette.secondary.main}70`,
            borderRight: `1px solid ${theme.palette.secondary.main}70`,
          }}
        >
          {filteredData.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", md: "33.33%" },

                borderTop:
                  {md: index >= 3
                    ? `1px solid ${theme.palette.secondary.main}70`
                    : "none", xs: `1px solid ${theme.palette.secondary.main}70`},

                borderRight: {
                  md:
                    index % 3 !== 2
                      ? `1px solid ${theme.palette.secondary.main}70`
                      : "none",
                },

                p: 3,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",

                "&:hover": {
                  bgcolor: "#fafafa",
                },
              }}
            >
              <Typography sx={{ fontSize: 16 }}>{item.label}</Typography>

              <ArrowOutwardIcon sx={{ color: theme.palette.secondary.main, fontSize: 20 }} />
            </Box>
          ))}

          {/* MORE BUTTON */}
          <Box
            sx={{
              width: { xs: "100%", md: "33.33%" },
              borderTop: `1px solid ${theme.palette.secondary.main}`,
              p: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#000",
                color: "#fff",
                px: 4,
                py: 1.5,
                fontSize: 16,
                textTransform: "none",
                "&:hover": { bgcolor: "#222" },
              }}
            >
              More
            </Button>
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default Journey;