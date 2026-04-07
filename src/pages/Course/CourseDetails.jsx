// src/pages/Course/CourseDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

const courses = [
  { id: 1, title: "React Course", price: 500, description: "Learn React from scratch." },
  { id: 2, title: "Node.js Course", price: 1000, description: "Master backend with Node.js." },
];

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === parseInt(courseId));
  if (!course) return <Typography>Course not found!</Typography>;

  return (
    <Box sx={{ padding: 4, display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 600, width: "100%" }}>
        <CardContent>
          <Typography variant="h4">{course.title}</Typography>
          <Typography variant="body1" sx={{ marginY: 2 }}>
            {course.description}
          </Typography>
          <Typography variant="h6">Price: ₹{course.price}</Typography>
        </CardContent>
        <Box sx={{ padding: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              const token = localStorage.getItem("token");
              if (!token) navigate("/login");
              else navigate(`/purchase/${course.id}`);
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default CourseDetails;