import React, { useState } from "react";
import { Typography, Button, Box, Card, CardContent, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const NAVBAR_COLOR = "#001f3f";

const LandingPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const theme = useTheme();

  const handleOpenCard = (card) => {
    setActiveCard(card);
  };

  const handleCloseCard = () => {
    setActiveCard(null);
  };

  const cardsContent = [
    { content: "Card 1: Exploring React", img: "src/assets/images.jpg" },
    { content: "Card 2: Diving into MUI", img: "src/assets/images.jpg" },
    { content: "Card 3: Building Components", img: "src/assets/images.jpg" },
    { content: "Card 4: State Management", img: "src/assets/images.jpg" },
    { content: "Card 5: Framer Motion", img: "src/assets/images.jpg" },
    { content: "Card 6: Responsive Design", img: "src/assets/images.jpg" },
  ];

  return (
    <Box
  sx={{
    minHeight: "100vh",
    backgroundImage: `url("src/assets/test.jpeg")`,
    backgroundPosition: "center center", // Ensures the image is centered
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
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))",
      zIndex: 1,
    },
  }}
>
           
      {/* Circular Cards Layout */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
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
          const radius = 130;
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
                sx={{
                  cursor: "pointer",
                  boxShadow: 4,
                  width: { xs: "100px", sm: "130px" },
                  height: { xs: "100px", sm: "130px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "white",
                  borderRadius: "50%",
                  "&:hover": {
                    transform: "scale(1.1)",
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <CardContent>
                  <motion.img
                    src={card.img}
                    alt={card.content}
                    style={{
                      width: "65px",
                      height: "70px",
                      borderRadius: "50%",
                      boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </CardContent>
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
                maxWidth: "90%",
                maxHeight: "90%",
                width: { xs: "300px", sm: "400px" },
                height: "auto",
                p: theme.spacing(3),
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <motion.img
                src={activeCard.img}
                alt={activeCard.content}
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  height: "auto",
                  borderRadius: "100%",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: "#333",
                  fontSize: "1rem",
                  fontWeight: "500",
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
