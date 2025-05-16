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
  IconButton,
} from "@mui/material";
import { Brightness7 } from "@mui/icons-material";

const App = () => {
  const navigate = useNavigate();

  const [isDarkBackground, setIsDarkBackground] = useState(false);

  const handleToggleBackground = () => {
    setIsDarkBackground((prev) => !prev);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: isDarkBackground
          ? "linear-gradient(135deg, #000000, #434343)"
          : "linear-gradient(135deg, #3f51b5, #9c27b0)",
        color: "white",
        transition: "background 5s ease",
      }}
    >
      {/* Toggle Button */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      >
        <IconButton
          onClick={handleToggleBackground}
          sx={{
            background: "rgba(255, 255, 255, 0.3)",
            color: "white",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.5)",
            },
          }}
          aria-label="Toggle Background"
        >
          <Brightness7 />
        </IconButton>
      </Box>

      {/* Header Section */}
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: 500,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          fontSize: { xs: "2rem", md: "3rem" },
          px: { xs: 2, md: 0 },
        }}
      >
        Welcome to Pune-40
      </Typography>

      {/* Content Section */}
      <Grid
        container
        spacing={4}
        sx={{
          mt: 2,
          mb: 2,
          px: { xs: 2, md: 0 },
          justifyContent: "center",
        }}
      >
        {/* Text Card */}
        <Grid item xs={12} sm={10} md={6}>
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: "white",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              borderRadius: 3,
              textAlign: "center",
              p: 3,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "#3f51b5",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                }}
              >
                Hi! I’m glad you’re here. 🌟
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #3f51b5, #9c27b0)",
                  color: "white",
                  mt: 2,
                  mb: 2,
                  px: { xs: 2, md: 3 },
                  py: 1.5,
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  borderRadius: 20,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
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
                  mt: 1,
                }}
              >
                <b>Contact: Test@gmail.com</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Image Card */}
        <Grid item xs={12} sm={10} md={6}>
          <CardMedia
            component="img"
            src="/src/assets/images.jpg"
            alt="Random nature image"
            onClick={() => navigate("/graduate")}
            sx={{
              maxWidth: "100%",
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
