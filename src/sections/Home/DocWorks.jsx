import React from "react";
import { Box, Container, Typography, Card } from "@mui/material";
import theme from "../../theme";

const data = [
  {
    id: "01",
    title: "Expert Faculty",
    description:
      "Learn from experienced doctors and mentors with years of clinical expertise.",
    image: "https://picsum.photos/id/4/5000/3333",
    steps: [
      {
        title: "8+",
        description: "Department",
      },
      {
        title: "30+",
        description: "Department",
      },
      {
        title: "100+",
        description: "Department",
      },
    ],
  },
  {
    id: "02",
    title: "Hands-on Training With Real Clinical Practice",
    description:
      "Practical exposure with real cases and modern hospital environments and advanced technology.",
    image: "https://picsum.photos/id/6/5000/3333",
    steps: [
      {
        title: "Step 1",
        description: "Department",
      },
      {
        title: "Step 2",
        description: "Department",
      },
      {
        title: "Step 3",
        description: "Department",
      },
    ],
  },
  {
    id: "03",
    title: "Career Support",
    description:
      "Guidance and placement assistance to help you grow in your career and professional development.",
    image: "https://picsum.photos/id/2/5000/3333",
    steps: [
      {
        title: "Career",
        description: "Department",
      },
      {
        title: "Placement",
        description: "Department",
      }
    ],
  },
];

const FeatureCards = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "#fff" }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 400,
            mb: 4,
            fontSize: 40,
          }}
        >
          How it <span style={{color: theme.palette.secondary.main}}>works</span>
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#000",
            fontWeight: 400,
            mb: 6,
            fontSize: 20,
          }}
        >
          Discover why thousands of students choose our fellowship programs.
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
          {data.map((item) => (
            <Box
              key={item.id}
              sx={{
                width: {
                  xs: "100%",
                  md: "32%",
                },
              }}
            >
              <Card
                sx={{
                  position: "relative",
                  height: 450,
                  borderRadius: 5,
                  overflow: "hidden",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Gradient Overlay */}
               <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 5%, rgba(0,0,0,0.9) 100%)",
                    }}
                />

                {/* Center Content */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "20%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "#fff",
                    width: "90%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 40,
                      fontWeight: 500,
                      mb: 4,
                    }}
                  >
                    {item.id}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>

                {/* Bottom Description */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 100,
                    left: 20,
                    right: 20,
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 14,
                      opacity: 0.9,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textAlign: 'left'
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>

                {/* Horizontal Steps */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    left: 0,
                    right: 5,
                    display: "flex",
                    gap: 3,
                    overflowX: "auto",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                  }}
                >
                  {item.steps?.map((step, index) => (
                    <Box
                      key={index}
                      sx={{
                        minWidth: 100,
                        color: "#fff",
                        textAlign: 'left'
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 500,
                          mb: 0.5,
                          fontSize: 20
                        }}
                      >
                        {step.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 13,
                          opacity: 0.9,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {step.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>


              </Card>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default FeatureCards;