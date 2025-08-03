import React from "react";
import { Box, Container, Typography } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          py: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#333",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          This is content
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
