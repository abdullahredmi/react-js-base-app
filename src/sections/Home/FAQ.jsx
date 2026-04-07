import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const faqData = [
  {
    question: "What is a medical fellowship program?",
    answer:
      "A fellowship program provides advanced clinical training for doctors in a specific specialty with mentorship and practical exposure.",
  },
  {
    question: "Who can apply for the fellowship?",
    answer:
      "Doctors who have completed MBBS or equivalent qualification can apply depending on the program requirements.",
  },
  {
    question: "Is the fellowship available online?",
    answer:
      "Yes, some programs offer online learning modules along with mentorship and assessments.",
  },
  {
    question: "Do you provide certification?",
    answer:
      "Yes, after successful completion of the fellowship program, participants will receive an official certification.",
  },
];

const FAQ = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "#fff" }}>
      <Container maxWidth="lg">

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            alignItems: "flex-start",
          }}
        >

          {/* LEFT SIDE */}
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "30%",
              },
            }}
          >
            <Typography sx={{ fontSize: 40, fontWeight: 400, mb: 2, lineHeight: 1.2, textAlign: 'left' }}>
              Your questions, answered
            </Typography>

            <Typography
              sx={{
                color: "#000",
                fontSize: 16,
                mb: 4,fontWeight: 400,
                textAlign: 'left'
              }}
            >
              Find answers to commonly asked questions about our fellowship
              programs and learning pathways.
            </Typography>

            <Button
            endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#000",
                color: "#fff",
                px: 4,
                py: 2.5,
                textTransform: "none",
                fontSize: 15,
                "&:hover": {
                  bgcolor: "#222",
                },
              }}
            >
              See all FAQs
            </Button>
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "65%",
              },
            }}
          >
            {faqData.map((item, index) => (
              <Accordion
                key={index}
                disableGutters
                elevation={0}
                sx={{
                  borderBottom: "1px solid #e5e5e5",
                  pb:3,
                  mb:3,
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 30 }} />}>
                  <Typography sx={{ fontWeight: 500, color: "#000", fontSize: 22, lineHeight: 1.2}}>
                    {item.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography sx={{ color: "#000", fontSize: 17, fontWeight: 400, lineHeight: 1.3, textAlign: 'left', }}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

        </Box>

      </Container>
    </Box>
  );
};

export default FAQ;