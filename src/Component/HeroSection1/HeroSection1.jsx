import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

import HeroImage from "../assets/download.jpeg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      {/* Green Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(29, 139, 29, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }}
        >
          Welcome to Card Shop
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, mb: 3 }}
        >
          Discover the perfect greeting & gift cards for every occasion
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "white",
            color: "green",
            fontWeight: "bold",
            px: 4,
            py: 1,
            "&:hover": { bgcolor: "lightgreen", color: "black" },
          }}
        >
          Shop Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
