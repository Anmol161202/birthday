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
  const [showConfetti, setShowConfetti] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Auto-hide confetti after 4 seconds
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const balloonColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];

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
          ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 100%)"
          : "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
        color: "white",
        transition: "background 0.5s ease",
        overflow: "hidden",
        m: 0,
        position: 'relative',
        // Add birthday-themed keyframe animations
        '@keyframes confetti': {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: 1 },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: 0 }
        },
        '@keyframes balloonFloat': {
          '0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' }
        },
        '@keyframes sparkle': {
          '0%, 100%': { opacity: 0, transform: 'scale(0)' },
          '50%': { opacity: 1, transform: 'scale(1)' }
        },
        '@keyframes bounce': {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0, -15px, 0)' },
          '70%': { transform: 'translate3d(0, -7px, 0)' },
          '90%': { transform: 'translate3d(0, -2px, 0)' }
        },
        '@keyframes rainbow': {
          '0%': { color: '#ff6b6b' },
          '16%': { color: '#4ecdc4' },
          '32%': { color: '#45b7d1' },
          '48%': { color: '#f9ca24' },
          '64%': { color: '#f0932b' },
          '80%': { color: '#eb4d4b' },
          '100%': { color: '#6c5ce7' }
        },
        '@keyframes fadeInUp': {
          'from': { opacity: 0, transform: 'translateY(30px)' },
          'to': { opacity: 1, transform: 'translateY(0)' }
        },
        '@keyframes slideInLeft': {
          'from': { opacity: 0, transform: 'translateX(-50px)' },
          'to': { opacity: 1, transform: 'translateX(0)' }
        },
        '@keyframes slideInRight': {
          'from': { opacity: 0, transform: 'translateX(50px)' },
          'to': { opacity: 1, transform: 'translateX(0)' }
        }
      }}
    >
      {/* Confetti Effect */}
      {showConfetti && (
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 50 }}>
          {[...Array(25)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: '-10px',
                width: '8px',
                height: '8px',
                background: balloonColors[Math.floor(Math.random() * balloonColors.length)],
                animation: `confetti ${Math.random() * 3 + 2}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0%',
              }}
            />
          ))}
        </Box>
      )}

      {/* Floating Balloons */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
        {balloonColors.slice(0, 6).map((color, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              left: `${5 + i * 15}%`,
              top: `${20 + Math.random() * 40}%`,
              animation: `balloonFloat ${4 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {/* Balloon */}
            <Box
              sx={{
                width: '35px',
                height: '45px',
                background: color,
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                position: 'relative',
                boxShadow: `inset -3px -3px 0 rgba(0,0,0,0.1)`,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-30px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '1px',
                  height: '30px',
                  background: '#333',
                }
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Sparkles */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
        {[...Array(15)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: '16px',
              animation: `sparkle ${Math.random() * 2 + 1}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ✨
          </Box>
        ))}
      </Box>

      {/* Toggle Background Button */}
      <Button
        onClick={() => setIsDarkBackground(!isDarkBackground)}
        variant="contained"
        sx={{ 
          position: "absolute", 
          top: 20, 
          right: 20,
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.3)',
            transform: 'scale(1.05)'
          }
        }}
      >
        {isDarkBackground ? '☀️' : '🌙'}
      </Button>

      <Box sx={{ zIndex: 2, animation: isLoaded ? 'fadeInUp 1s ease-out' : 'none' }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
            mb: 1,
            animation: 'rainbow 3s ease-in-out infinite',
            textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
          }}
        >
          🎉 Happy Birthday Pune-40! 🎉
        </Typography>

        <Box sx={{ 
          textAlign: 'center', 
          mb: 4,
          animation: 'bounce 2s infinite'
        }}>
          <Typography variant="h3" component="div">
            🎂
          </Typography>
        </Box>
      </Box>

      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center",
          zIndex: 2,
          maxWidth: '900px'
        }}
      >
        {/* Text Card */}
        <Grid item xs={12} sm={10} md={6}>
          <Box sx={{ animation: isLoaded ? 'slideInLeft 1s ease-out 0.3s both' : 'none' }}>
            <Card
              sx={{
                height: "280px",
                width: "100%",
                maxWidth: "420px",
                mx: 'auto',
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: "#333",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
                borderRadius: 3,
                textAlign: "center",
                "&:hover": {
                  transform: "translateY(-15px) scale(1.02)",
                  boxShadow: "0 35px 70px rgba(0, 0, 0, 0.3)",
                },
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'conic-gradient(from 0deg, transparent, rgba(255,107,107,0.1), transparent, rgba(78,205,196,0.1), transparent)',
                  animation: 'rainbow 4s linear infinite',
                  opacity: 0.5
                }
              }}
            >
              <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ fontSize: '3rem', mb: 2 }}>🎊</Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                    mb: 2
                  }}
                >
                  Hi! I'm glad you're here. 🌟
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(0, 0, 0, 0.7)',
                    mb: 2,
                    fontSize: '1rem',
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
                    boxShadow: '0 10px 25px rgba(255, 107, 107, 0.4)',
                    "&:hover": {
                      background: "linear-gradient(135deg, #4ecdc4, #ff6b6b)",
                      transform: 'translateY(-2px)',
                      boxShadow: '0 15px 35px rgba(255, 107, 107, 0.6)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => navigate("/landing")}
                >
                  🎉 Learn More About Me 🎉
                </Button>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontStyle: "italic",
                    mt: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1
                  }}
                >
                  <span>📧</span>
                  <b>Test@gmail.com</b>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* Image Card */}
        <Grid item xs={12} sm={10} md={6}>
          <Box sx={{ animation: isLoaded ? 'slideInRight 1s ease-out 0.5s both' : 'none' }}>
            <Box
              sx={{
                position: 'relative',
                height: "280px",
                width: "100%",
                maxWidth: "420px",
                mx: 'auto',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                cursor: "pointer",
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "translateY(-15px) scale(1.02)",
                  boxShadow: "0 35px 70px rgba(0, 0, 0, 0.4)",
                },
              }}
              onClick={() => navigate("/graduate")}
            >
              <CardMedia
                component="img"
                src="src/assets/Pastry.jpg"
                alt="Birthday Celebration"
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                  '&:hover': {
                    transform: 'scale(1.1)'
                  }
                }}
              />
              
              {/* Birthday Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(45deg, rgba(255,107,107,0.2), rgba(78,205,196,0.2))',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 3,
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  🎂 Birthday Gallery 📸
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Click to explore birthday memories!
                </Typography>
              </Box>
              
              {/* Sparkle overlay on hover */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none',
                  '&:hover': {
                    opacity: 1
                  }
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Birthday Quote */}
      <Box sx={{ 
        position: 'absolute', 
        bottom: 30, 
        textAlign: 'center',
        animation: isLoaded ? 'fadeInUp 1s ease-out 1s both' : 'none',
        zIndex: 2
      }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            fontStyle: 'italic',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            opacity: 0.9
          }}
        >
          "Birthdays are nature's way of telling us to eat more cake!" 🍰
        </Typography>
      </Box>
    </Box>
  );
};

export default App;