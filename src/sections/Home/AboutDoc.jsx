"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container,
  Stack,
  useTheme, Chip
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { alpha } from "@mui/material/styles";

const videoData = [
  {
    id: 1,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Leadership Excellence",
    cards: [
      { 
        id: 1, 
        image: "https://images.unsplash.com/photo-1581091215364-4b53d92b6f5a?w=400&h=300&fit=crop", 
        title: "Strategic Thinking",
        subtitle: "Master the art of strategy",
        description: "Learn how to think strategically and make impactful decisions that drive organizational success."
      },
      { 
        id: 2, 
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop", 
        title: "Team Management",
        subtitle: "Lead with confidence",
        description: "Build and manage high-performing teams with effective leadership techniques."
      },
      { 
        id: 3, 
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop", 
        title: "Communication Skills",
        subtitle: "Inspire through words",
        description: "Master the art of effective communication and persuasive storytelling."
      },
      { 
        id: 4, 
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop", 
        title: "Emotional Intelligence",
        subtitle: "Lead with empathy",
        description: "Develop emotional intelligence to build stronger relationships."
      },
      { 
        id: 5, 
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop", 
        title: "Change Management",
        subtitle: "Lead organizational change",
        description: "Master the art of leading organizational change effectively."
      },
    ],
  }
];

export default function VideoCardCarousel() {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.load();
//       videoRef.current.play().catch(() => {});
//     }
//   }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % videoData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + videoData.length) % videoData.length);
  };

  return (
    <Box sx={{ py: 8, background: "#FFF" }}>
        <Container maxWidth={false} sx={{ maxWidth: "1300px" }}>

          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={6}>
             <Typography
                fontSize={{ xs: 35, md: 60 }}
                fontWeight={500}
                mb={4}
                color="text.secondary" lineHeight={1.3}
                >
                What fellows say{" "}
                <Box
                    component="span"
                    sx={{ color: "secondary.main", fontStyle: 'italic' }}
                >
                    about DocTutorials
                </Box>
            </Typography>
          </Box>
        </motion.div>

        {/* VIDEO + CARDS */}
        <Box sx={{ position: "relative", textAlign: "center" }}>
          {/* Video */}
        <Box
            component="video"
            ref={videoRef}
            src={videoData[activeIndex].videoUrl}
            controls
            autoPlay={false}
            sx={{
                borderRadius: 2, // 12px
                maxHeight: 500,
                objectFit: "cover",
                width: { xs: "100%", md: "80%" }, // mobile 100%, desktop 80%
            }}
            />

       {/* Cards Carousel */}
        <Box
        sx={{
            display: "flex",
            gap: 4,
            mt: 8,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": { display: "none" },
            px: 1,
            mb: 4
        }}
        >
        {videoData[activeIndex].cards.map((card) => (
            <motion.div
            key={card.id}
            whileHover={{ scale: 1.03 }}
            style={{
                maxWidth: 400,
                flex: "0 0 auto",
                scrollSnapAlign: "center",
                cursor: "pointer",
            }}
            >
                <Card
                    sx={{
                        borderRadius: 3,
                        marginBottom: 2,
                        marginTop: 2,
                        border: `1px solid ${alpha(theme.palette.secondary.main, 0.5)}`, // note 0.2 instead of 2
                        background: alpha(theme.palette.secondary.main, 0.03),
                    }}
                    >
                {/* Top row: Image + Title/Subtitle */}
                <Box sx={{ display: "flex", padding: 2 }}>
                {/* Left image */}
                <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                    sx={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: 10,
                    marginRight: 2,
                    }}
                />

                {/* Right content */}
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                    <Typography
                    variant="subtitle1"
                    fontSize={25}
                    fontWeight={700}
                    sx={{
                        textAlign: "left",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                    }}
                    >
                    {card.title}
                    </Typography>
                    <Typography
                    variant="subtitle2"
                    fontSize={16}
                    color="text.secondary"
                    sx={{
                        textAlign: "left",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                    }}
                    >
                    {card.subtitle}
                    </Typography>
                </Box>
                </Box>

                {/* Bottom row: Description */}
                <Box sx={{ p: 2, borderTop: "1px solid #eee" }}>
                <Typography
                    variant="body2"
                    fontSize={20}
                    color="text.secondary"
                    sx={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    textAlign: 'left'
                    }}
                >
                    "{card.description}"
                </Typography>
                </Box>
            </Card>
            </motion.div>
        ))}
        </Box>

          {/* Dots Navigation for video+cards */}
          <Stack direction="row" spacing={1.5} justifyContent="center" mt={3}>
            {videoData.map((_, idx) => (
              <Box
                key={idx}
                onClick={() => setActiveIndex(idx)}
                sx={{
                  width: activeIndex === idx ? 20 : 8,
                  height: 8,
                  borderRadius: 4,
                  bgcolor: activeIndex === idx ? theme.palette.primary.main : "#ccc",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}