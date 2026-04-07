import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { alpha } from "@mui/material/styles";
import theme from "../../theme";

const blogData = [
  {
    id: 1,
    title: "How Fellowship Programs Help Doctors Advance Their Career",
    description:
      "Explore how structured fellowship programs provide practical exposure, mentorship and career growth opportunities for doctors.",
    category: "Career",
    image: "https://picsum.photos/id/1015/600/400",
  },
  {
    id: 2,
    title: "Why Clinical Mentorship is Important for Medical Professionals",
    description:
      "Mentorship plays a key role in shaping clinical skills and professional confidence among doctors.",
    category: "Mentorship",
    image: "https://picsum.photos/id/1016/600/400",
  },
  {
    id: 3,
    title: "Top Medical Specialties Doctors Are Choosing Today",
    description:
      "A quick overview of trending medical specialties and why doctors are pursuing them.",
    category: "Specialty",
    image: "https://picsum.photos/id/1018/600/400",
  },
];

const Blog = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "#fff" }}>
      <Container maxWidth="lg">

        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            mb: 6,
            gap: 2,
          }}
        >
          <Box sx={{ maxWidth: 600 }}>
            <Typography sx={{ fontSize: 36, fontWeight: 500, mb: 1, textAlign: 'left', lineHeight: 1.3 }}>
              Latest Blogs
            </Typography>

            <Typography sx={{ color: "#000", fontSize: 17, fontWeight: 400, textAlign: 'left', lineHeight: 1.2 }}>
              Stay updated with insights, medical trends and fellowship
              opportunities designed for doctors.
            </Typography>
          </Box>

          <Button
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: "#000",
              color: "#fff",
              px: 4,
              py: 2,
              textTransform: "none",
              borderRadius: 2,
              fontSize: 18,
              fontWeight: 400, 
              "&:hover": { bgcolor: "#222" },
            }}
          >
            See our blog
          </Button>
        </Box>

        {/* BLOG GRID */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {blogData.map((item) => (
            <Box
              key={item.id}
              sx={{
                width: {
                  xs: "100%",
                  md: "30%",
                },
              }}
            >
              <Box
                sx={{
                //   border: "1px solid #eee",
                  borderRadius: 4,
                  overflow: "hidden",
                  bgcolor: "#fff",
                }}
              >

                {/* IMAGE */}
                <Box
                  component="img"
                  src={item.image}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 4,
                  }}
                />

                {/* CONTENT */}
                <Box sx={{ pt: 3, pb: 3 , textAlign: 'left' }}>

                  {/* BADGE */}
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 1.5,
                      py: 0.5,
                      mb: 1.5,
                      fontSize: 13,
                      fontWeight: 500,
                      borderRadius: 2,
                      background: alpha(theme.palette.secondary.main, 0.1),
                      color: theme.palette.secondary.main,
                    }}
                  >
                    {item.category}
                  </Box>

                  {/* TITLE */}
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 600,
                      mb: 1,
                      lineHeight: 1.4, textAlign: 'left'
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* DESCRIPTION */}
                  <Typography
                    sx={{
                      fontSize: 15,
                      color: "#666",
                      lineHeight: 1.5,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden", textAlign: 'left'
                    }}
                  >
                    {item.description}
                  </Typography>

                </Box>
              </Box>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default Blog;