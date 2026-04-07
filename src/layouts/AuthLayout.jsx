import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";

const AuthLayout = () => {
  return (
    <Container maxWidth="xl">
      <Box >
        <Outlet />
      </Box>
    </Container>
  );
};

export default AuthLayout;