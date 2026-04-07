import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Mock course data
const courses = [
  { id: 1, title: "React Basics", price: 500, description: "Learn React from scratch." },
  { id: 2, title: "Advanced React", price: 1000, description: "Deep dive into React hooks & context." },
];

const CourseList = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 40 }}>
      <Typography variant="h4" gutterBottom>Available Courses</Typography>
      <Grid container spacing={3}>
        {courses.map(course => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{course.title}</Typography>
                <Typography variant="body2">{course.description}</Typography>
                <Typography variant="subtitle1" sx={{ marginTop: 1 }}>₹{course.price}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                  onClick={() => navigate(`/course/${course.id}`)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CourseList;