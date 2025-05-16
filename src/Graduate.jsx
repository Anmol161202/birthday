import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box, Typography, Grid, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "about",
    label: "About Me",
    content: [
      "Recent graduate in Computer Engineering with experience in Data Analysis, Machine Learning, and Web Development.",
      "Skilled in Python, SQL, React, Power-BI.",
      "Passionate about building intelligent solutions to real-world problems.",
    ],
  },
  {
    id: "education",
    label: "Education",
    content: [
      "Bachelor of Engineering in Computer Engineering, Pillai College of Engineering (2021-2024), CGPA: 7.18",
      "Specialized in Data Science, Artificial Intelligence, and Full-Stack Development.",
      ""
    ],
  },
  {
    id: "skills",
    label: "Skills",
    content: [
      "Programming: Python, JavaScript, SQL, C++",
      "Web Development: React, HTML, CSS, Node.js",
      "AI/ML: TensorFlow, scikit-learn, OpenAI API",
      "Tools: Power BI, Git, MySQL",
    ],
  },
  {
    id: "projects",
    label: "Projects",
    content: [
      "Multimodal Food Recommendation System: AI-powered system for personalized food recommendations.",
      "Fitness Tracker Website: Modern platform for tracking fitness and health metrics.",
      "Attendance Tracker: QR-based system for automated attendance management.",
    ],
  },
];

const Graduate = () => {
  const [activeSection, setActiveSection] = useState("about");

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: { xs: "center", md: "space-around" },
            flexWrap: "wrap",
            gap: 1,
            py: { xs: 1, md: 2 },
          }}
        >
          {sections.map((section) => (
            <motion.div
              key={section.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ display: "inline-block" }}
            >
              <Button
                onClick={() => setActiveSection(section.id)}
                sx={{
                  color: activeSection === section.id ? "#03dac5" : "#ffffff",
                  fontWeight: "bold",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  "&:hover": { color: "#03dac5" },
                }}
              >
                {section.label}
              </Button>
            </motion.div>
          ))}
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ py: { xs: 4, sm: 8 }, px: { xs: 2, sm: 4 } }}>
        <AnimatePresence mode="wait">
          {sections
            .filter((section) => section.id === activeSection)
            .map((section) => (
              <motion.div
                key={section.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Box
                  sx={{
                    p: { xs: 2, sm: 4 },
                    borderRadius: 4,
                    background: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      color: "#03dac5",
                      textAlign: "center",
                      fontSize: { xs: "1.5rem", sm: "2rem" },
                    }}
                  >
                    {section.label}
                  </Typography>
                  <Grid container spacing={2}>
                    {section.content.map((item, index) => (
                      <Grid key={index} item xs={12}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: { xs: "0.9rem", sm: "1.1rem" },
                            color: "rgba(255, 255, 255, 0.8)",
                            textAlign: "justify",
                          }}
                        >
                          {item}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            ))}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Graduate;
