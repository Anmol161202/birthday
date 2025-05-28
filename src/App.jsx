import React, { useState, useEffect } from "react";
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
  const [activeCard, setActiveCard] = useState(null);
  const [activeImage, setActiveImage] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger content animation after component mounts
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleCardTouch = (cardId) => {
    setActiveCard(cardId);
    setTimeout(() => setActiveCard(null), 200);
  };

  const handleImageTouch = () => {
    setActiveImage(true);
    setTimeout(() => setActiveImage(false), 200);
  };

  return (
    <Box
      sx={{
        height: "110vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        background: isDarkBackground
          ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 100%)"
          : "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
        color: "white",
        transition: "background 0.5s ease",
        overflow: "hidden",
        m: 0,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          animation: "gentleFloat 8s ease-in-out infinite",
          zIndex: 1,
        },
        "@keyframes gentleFloat": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "@keyframes sparkle": {
          "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
          "50%": { opacity: 0.8, transform: "scale(1.1)" },
        },
        "@keyframes fadeInUp": {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "@keyframes slideInFromLeft": {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "@keyframes slideInFromRight": {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      }}
    >
      {/* Floating sparkles */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: "8px",
          height: "8px",
          background: "rgba(255, 255, 255, 0.6)",
          borderRadius: "50%",
          animation: "sparkle 3s ease-in-out infinite",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          right: "15%",
          width: "6px",
          height: "6px",
          background: "rgba(255, 255, 255, 0.5)",
          borderRadius: "50%",
          animation: "sparkle 4s ease-in-out infinite 1s",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "20%",
          width: "10px",
          height: "10px",
          background: "rgba(255, 255, 255, 0.4)",
          borderRadius: "50%",
          animation: "sparkle 5s ease-in-out infinite 2s",
          zIndex: 1,
        }}
      />

      {/* Toggle Background Button */}
      <Button
        onClick={() => setIsDarkBackground(!isDarkBackground)}
        variant="contained"
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 10,
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          animation: showContent ? "fadeInUp 0.8s ease-out 0.5s both" : "none",
          "&:hover": {
            background: "rgba(255, 255, 255, 0.3)",
            transform: "scale(1.05)",
          },
        }}
      >
        {isDarkBackground ? "☀️" : "🌙"}
      </Button>

      <Box 
        sx={{ 
          zIndex: 2,
          animation: showContent ? "fadeInUp 1s ease-out both" : "none",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: 500,
            fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
            mb: 5,
            textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
          }}
        >
          Happiest Birthday Meri Pyaari Mental Disha 🎉
        </Typography>
      </Box>

      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          zIndex: 2,
          maxWidth: "900px",
        }}
      >
        {/* Text Card */}
        <Grid item xs={12} sm={10} md={6}>
          <Card
            onTouchStart={() => handleCardTouch('text')}
            sx={{
              height: "200px",
              width: "85%",
              maxWidth: "420px",
              mx: "auto",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              color: "#333",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
              borderRadius: 3,
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
              animation: showContent ? "slideInFromLeft 1s ease-out 0.3s both" : "none",
              transform: activeCard === 'text' 
                ? "translateY(-15px) scale(1.02)" 
                : "translateY(0) scale(1)",
              boxShadow: activeCard === 'text'
                ? "0 35px 70px rgba(0, 0, 0, 0.4)"
                : "0 25px 50px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                transform: "translateY(-15px) scale(1.02)",
                boxShadow: "0 35px 70px rgba(0, 0, 0, 0.4)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                  mb: 0,
                }}
              >
                Hi! I'm glad you're here. 🌟
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(0, 0, 0, 0.7)",
                  mb: 2,
                  fontSize: "1rem",
                }}
              >
                Let's celebrate this special day together!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
                  color: "white",
                  mt: 1,
                  px: { xs: 4, sm: 5, md: 6 },
                  py: 1.5,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  borderRadius: 20,
                  boxShadow: "0 10px 25px rgba(255, 107, 107, 0.4)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #4ecdc4, #ff6b6b)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 15px 35px rgba(255, 107, 107, 0.6)",
                  },
                  transition: "all 0.3s ease",
                }}
                onClick={() => navigate("/landing")}
              >
                🎉 📷 🎉
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Image Card */}
        <Grid item xs={12} sm={10} md={6}>
          <Box
            onTouchStart={handleImageTouch}
            sx={{
              position: "relative",
              height: "200px",
              width: "100%",
              maxWidth: "300px",
              mx: "auto",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
              transition: "all 0.4s ease",
              animation: showContent ? "slideInFromRight 1s ease-out 0.5s both" : "none",
              transform: activeImage 
                ? "translateY(-15px) scale(1.02)" 
                : "translateY(0) scale(1)",
              boxShadow: activeImage
                ? "0 35px 70px rgba(0, 0, 0, 0.4)"
                : "0 25px 50px rgba(0, 0, 0, 0.3)",
              "&:hover": {
                transform: "translateY(-15px) scale(1.02)",
                boxShadow: "0 35px 70px rgba(0, 0, 0, 0.4)",
              },
            }}
            tabIndex={0}
            onClick={() => navigate("/graduate")}
          >
            <CardMedia
              component="img"
              src="src/assets/Pastry.jpg"
              alt="Birthday Celebration"
              sx={{
                height: "105%",
                width: "110%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;