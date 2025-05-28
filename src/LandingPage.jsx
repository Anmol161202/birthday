import React, { useState } from "react";
import { Typography, Button, Box, Card, CardContent, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const NAVBAR_COLOR = "#001f3f";

const LandingPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [touchedCard, setTouchedCard] = useState(null);
  const theme = useTheme();

  const handleOpenCard = (card) => {
    setActiveCard(card);
  };

  const handleCloseCard = () => {
    setActiveCard(null);
  };

  const handleCardTouch = (index) => {
    setTouchedCard(index);
    setTimeout(() => setTouchedCard(null), 200);
  };

  const cardsContent = [
    { content: "Kya disha, khud nakhun khati aur meko bolti hai.", img: "src/assets/Colaba.jpg" },
    { content: "Shani toh tu hai", img: "src/assets/Snapchat-270284867.jpg" },
    { content: "Tu ashi chidtana pn khub god distes", img: "src/assets/VideoCapture_20250528-133420.jpg" },
    { content: "राणीसारखी जपायला मी राजा नाही,ओंजळीत तुझ्या प्रिये सदैव सुख देईन.", img: "src/assets/Group.jpg" },
    { content: "Chocolate deta hu aaj mera baccha, okay?!", img: "src/assets/Chocolate.jpg" },
    { content: "Bas zyaada jhaad pe mat chad ab, mere pe chad ", img: "src/assets/16th.jpg" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url("src/assets/test.jpeg")`,
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "0%",
          height: "0%",
          background: "linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))",
          zIndex: 1,
        },
      }}
    >
      {/* Circular Cards Layout */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          width: "400px",
          height: "400px",
          [theme.breakpoints.down("sm")]: {
            width: "300px",
            height: "300px",
          },
        }}
      >
        {cardsContent.map((card, index) => {
          const angle = (index / cardsContent.length) * 360;
          const radius = 135;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div
              key={index}
              style={{
                position: "absolute",
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card
                onClick={() => handleOpenCard(card)}
                onTouchStart={() => handleCardTouch(index)}
                sx={{
                  cursor: "pointer",
                  boxShadow: 4,
                  width: { xs: "100px", sm: "130px" },
                  height: { xs: "100px", sm: "130px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(0px)",
                  borderRadius: "50%",
                  padding: "6px",
                  transition: "all 0.3s ease",
                  transform: touchedCard === index ? "scale(1.1)" : "scale(1)",
                  boxShadow: touchedCard === index 
                    ? "0 6px 15px rgba(0, 0, 0, 0.2)" 
                    : "0 4px 8px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    transform: "scale(1.1)",
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={card.img}
                    alt={card.content}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
              </Card>
            </motion.div>
          );
        })}
      </Box>

      {/* Modal for Active Card */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(8px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            <Box
              sx={{
                background: "white",
                borderRadius: "20px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                maxWidth: "100%",
                maxHeight: "100%",
                width: { xs: "300px", sm: "400px" },
                height: "auto",
                p: theme.spacing(3),
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginBottom: theme.spacing(2),
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                }}
              >
                <img
                  src={activeCard.img}
                  alt={activeCard.content}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: "#333",
                  fontSize: "1rem",
                  fontWeight: "500",
                  marginBottom: theme.spacing(2),
                }}
              >
                {activeCard.content}
              </Typography>
              <Button
                variant="contained"
                onClick={handleCloseCard}
                sx={{
                  backgroundColor: NAVBAR_COLOR,
                  "&:hover": { backgroundColor: "#003366" },
                  padding: theme.spacing(1, 3),
                  borderRadius: "20px",
                }}
              >
                Close
              </Button>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default LandingPage;