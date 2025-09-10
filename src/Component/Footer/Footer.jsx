import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "success.main",
        color: "white",
        py: 6,
        mt: 6,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* About */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Card Shop
            </Typography>
            <Typography variant="body2">
              Discover greeting and gift cards for every occasion. We bring joy
              and emotions to life through unique designs.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", "&:hover": { color: "lightgreen" } }}
            >
              Home
            </Typography>
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", "&:hover": { color: "lightgreen" } }}
            >
              About
            </Typography>
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", "&:hover": { color: "lightgreen" } }}
            >
              Products
            </Typography>
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", "&:hover": { color: "lightgreen" } }}
            >
              Contact
            </Typography>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">📍 Karachi, Pakistan</Typography>
            <Typography variant="body2">📧 support@cardshop.com</Typography>
            <Typography variant="body2">📞 +92 300 1234567</Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                sx={{ color: "white", "&:hover": { color: "lightgreen" } }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                sx={{ color: "white", "&:hover": { color: "lightgreen" } }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                sx={{ color: "white", "&:hover": { color: "lightgreen" } }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                sx={{ color: "white", "&:hover": { color: "lightgreen" } }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Line */}
        <Box
          textAlign="center"
          pt={4}
          mt={4}
          borderTop="1px solid rgba(255,255,255,0.2)"
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Card Shop. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
