// src/pages/Purchase/Purchase.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

const courses = [
  { id: 1, title: "React Course", price: 500 },
  { id: 2, title: "Node.js Course", price: 600 },
];

const Purchase = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === parseInt(courseId));

  const handlePayment = async () => {
    try {
      const response = await fetch("http://localhost:1339/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: course.price, courseId: course.id, userId: 1 }),
      });
      const data = await response.json();
      const { order } = data;

      const options = {
        key: "YOUR_RAZORPAY_KEY_ID",
        amount: order.amount,
        currency: order.currency,
        name: "My Courses",
        description: course.title,
        order_id: order.id,
        handler: async (res) => {
          await fetch("http://localhost:1339/api/payments/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(res),
          });
          alert("Payment Successful!");
        },
        prefill: { name: "User Name", email: "user@example.com", contact: "9999999999" },
        theme: { color: "#1976d2" }, // MUI blue
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <Box sx={{ padding: 4, display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 600, width: "100%", textAlign: "center" }}>
        <CardContent>
          <Typography variant="h4">{course.title}</Typography>
          <Typography variant="h6" sx={{ marginY: 2 }}>
            Price: ₹{course.price}
          </Typography>
          <Button variant="contained" color="primary" onClick={handlePayment}>
            Pay Now
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Purchase;