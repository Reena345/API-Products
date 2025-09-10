import { Box, Typography, Button, TextField } from "@mui/material";

export default function PreFooterSection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh", // full laptop screen
        backgroundImage: `url("https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80")`, // sample bg image
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
      }}
    >
      {/* Overlay color */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(56, 142, 60, 0.7)", // MUI green overlay with opacity
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          bgcolor: "rgba(255,255,255,0.9)", // semi-transparent white card
          width: "100%",
          maxWidth: "800px",
          py: 6,
          px: 4,
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="success.main" gutterBottom>
          Stay Connected With Us
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "600px", mx: "auto", mb: 4, color: "text.secondary" }}
        >
          Subscribe to our newsletter and never miss updates on our latest
          products, offers, and news.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            size="medium"
            sx={{
              bgcolor: "#fff",
              borderRadius: "8px",
              flex: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "success.main",
                },
                "&:hover fieldset": {
                  borderColor: "success.dark",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "success.main",
                  borderWidth: 2,
                },
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "success.main",
              "&:hover": { bgcolor: "success.dark" },
              px: 5,
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(56, 142, 60, 0.4)",
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
