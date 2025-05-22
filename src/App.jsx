import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  CardMedia,
} from "@mui/material";

const App = () => {
  const navigate = useNavigate();
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        background: isDarkBackground
          ? "linear-gradient(135deg, #000000, #434343)"
          : "linear-gradient(135deg, #3f51b5, #9c27b0)",
        color: "white",
        transition: "background 0.5s ease",
        overflow: "hidden",
        m: 0, // Ensure no external margins
      }}
    >
      {/* Toggle Background Button */}
      {/*
      <Button
        onClick={() => setIsDarkBackground(!isDarkBackground)}
        variant="contained"
        sx={{ position: "absolute", top: 20, right: 20 }}
      >
        Toggle Background
      </Button>
      */}

      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: 500,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        Welcome to Pune-40
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center",
        }}
      >
        {/* Text Card */}
<Grid item xs={12} sm={10} md={6}>
  <Card
    sx={{
      height: "205px", // Fixed height
      width: "100%",   // Full width for responsive design
      maxWidth: "420px", // Optional: Limit max width
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      color: "#333",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
      borderRadius: 3,
      textAlign: "center",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.5)",
      },
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      display: "flex", // Ensure content aligns properly
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CardContent>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: "#3f51b5",
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
        }}
      >
        Hi! I’m glad you’re here. 🌟
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(135deg, #3f51b5, #9c27b0)",
          color: "white",
          mt: 1,
          px: { xs: 5, sm: 6, md: 8 },
          py: 1.7,
          fontSize: { xs: "0.8rem", md: "1rem" },
          borderRadius: 20,
          "&:hover": {
            background: "linear-gradient(135deg, #9c27b0, #3f51b5)",
          },
        }}
        onClick={() => navigate("/landing")}
      >
        Learn More About Me
      </Button>
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          fontStyle: "italic",
          mt: 2,
        }}
      >
        <b>Contact: Test@gmail.com</b>
      </Typography>
    </CardContent>
  </Card>
</Grid>
        {/* Text Card */}
        {/* Image Card */}
<Grid item xs={12} sm={10} md={6}>
  <CardMedia
    component="img"
    src="src/assets/Pastry.jpg"
    alt="Pastry"
    onClick={() => navigate("/graduate")}
    sx={{
      height: "195px", // Fixed height
      width: "100%",   // Full width for responsive design
      maxWidth: "420px", // Optional: Limit max width
      borderRadius: 3,
      boxShadow: "0 5px 16px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)",
      },
    }}
  />
</Grid>

      </Grid> 
    </Box>
  );
};

export default App;
