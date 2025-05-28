import React, { useState, useEffect } from "react";

const NAVBAR_COLOR = "#001f3f";
const ACCENT_COLOR = "#ff6b9d";
const GOLD_COLOR = "#ffd700";

const LandingPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [touchedCard, setTouchedCard] = useState(null);
  const [showTitle, setShowTitle] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 500);
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenCard = (card) => {
    setActiveCard(card);
  };

  const handleCloseCard = () => {
    setActiveCard(null);
  };

  const handleCardTouch = (index) => {
    setTouchedCard(index);
    setTimeout(() => setTouchedCard(null), 300);
  };

  const cardsContent = [
    { content: "Kya disha, khud nakhun khati aur meko bolti hai.", img: "https://mepteq.com/birthday/16th.jpg" },
    { content: "Shani toh tu hai", img: "https://mepteq.com/birthday/Chocolate.jpg" },
    { content: "Tu ashi chidtana pn khub god distes", img: "https://mepteq.com/birthday/Colaba.jpg" },
    { content: "राणीसारखी जपायला मी राजा नाही,ओंजळीत तुझ्या प्रिये सदैव सुख देईन.", img: "https://mepteq.com/birthday/Group.jpg" },
    { content: "Chocolate deta hu aaj mera baccha, okay?!", img: "https://mepteq.com/birthday/Snapchat-270284867.jpg" },
    { content: "Bas zyaada jhaad pe mat chad ab, mere pe chad", img: "https://mepteq.com/birthday/VideoCapture_20250528-133420.jpg" },
  ];

  // Responsive sizing
  const isMobile = windowSize.width <= 768;
  const isTablet = windowSize.width > 768 && windowSize.width <= 1024;
  
  const getContainerSize = () => {
    if (isMobile) return { width: 280, height: 280 };
    if (isTablet) return { width: 350, height: 350 };
    return { width: 450, height: 450 };
  };

  const getCardSize = () => {
    if (isMobile) return { width: 70, height: 70 };
    if (isTablet) return { width: 90, height: 90 };
    return { width: 110, height: 110 };
  };

  const getRadius = () => {
    if (isMobile) return 100;
    if (isTablet) return 120;
    return 150;
  };

  const containerSize = getContainerSize();
  const cardSize = getCardSize();
  const radius = getRadius();

  const FloatingHeart = ({ index }) => (
    <div
      style={{
        position: "absolute",
        zIndex: 2,
        color: ACCENT_COLOR,
        fontSize: isMobile ? "20px" : "24px",
        opacity: 0.6,
        left: `${Math.random() * 100}%`,
        animation: `float${index} ${6 + Math.random() * 4}s infinite ease-in-out`,
        animationDelay: `${index * 0.5}s`,
      }}
    >
      💖
    </div>
  );

  return (
    <>
      <style jsx>{`
        @keyframes float0 { 0%, 100% { transform: translateY(0) rotate(0deg); } 25% { transform: translateY(-100px) rotate(90deg); } 50% { transform: translateY(-50px) rotate(180deg); } 75% { transform: translateY(-80px) rotate(270deg); } }
        @keyframes float1 { 0%, 100% { transform: translateY(0) rotate(0deg); } 30% { transform: translateY(-120px) rotate(180deg); } 60% { transform: translateY(-70px) rotate(360deg); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0) rotate(0deg); } 40% { transform: translateY(-90px) rotate(270deg); } 80% { transform: translateY(-110px) rotate(180deg); } }
        @keyframes float3 { 0%, 100% { transform: translateY(0) rotate(0deg); } 20% { transform: translateY(-130px) rotate(90deg); } 70% { transform: translateY(-60px) rotate(270deg); } }
        @keyframes float4 { 0%, 100% { transform: translateY(0) rotate(0deg); } 35% { transform: translateY(-95px) rotate(180deg); } 65% { transform: translateY(-85px) rotate(360deg); } }
        @keyframes float5 { 0%, 100% { transform: translateY(0) rotate(0deg); } 25% { transform: translateY(-105px) rotate(270deg); } 75% { transform: translateY(-75px) rotate(90deg); } }
        @keyframes float6 { 0%, 100% { transform: translateY(0) rotate(0deg); } 45% { transform: translateY(-115px) rotate(180deg); } 85% { transform: translateY(-65px) rotate(360deg); } }
        @keyframes float7 { 0%, 100% { transform: translateY(0) rotate(0deg); } 30% { transform: translateY(-125px) rotate(90deg); } 60% { transform: translateY(-55px) rotate(270deg); } }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes glow {
          0% { filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5)); }
          100% { filter: drop-shadow(0 0 20px rgba(255, 107, 157, 0.8)); }
        }
        
        @keyframes popIn {
          0% { transform: translate(-50%, -50%) scale(0) rotate(180deg); opacity: 0; }
          100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes modalIn {
          0% { transform: scale(0.5) rotateY(90deg); opacity: 0; }
          100% { transform: scale(1) rotateY(0deg); opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
      
      <div
        style={{
          minHeight: "100vh",
          background: `
            linear-gradient(135deg, rgba(255, 107, 157, 0.3), rgba(0, 31, 63, 0.7)),
            url("https://mepteq.com/birthday/test.jpeg")
          `,
          backgroundPosition: "center center",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "20px",
        }}
      >
        {/* Background overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(255, 107, 157, 0.2))",
            zIndex: 1,
          }}
        />

        {/* Floating hearts */}
        {[...Array(8)].map((_, i) => (
          <FloatingHeart key={i} index={i} />
        ))}

        {/* Birthday Title */}
        {showTitle && (
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
              zIndex: 3,
              position: "relative",
              animation: "fadeIn 1.5s ease-out",
            }}
          >
            <h1
              style={{
                fontSize: isMobile ? "2rem" : isTablet ? "2.5rem" : "3.5rem",
                color: "white",
                fontWeight: "bold",
                textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                marginBottom: "10px",
                background: `linear-gradient(45deg, ${GOLD_COLOR}, ${ACCENT_COLOR})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                animation: "glow 2s ease-in-out infinite alternate",
              }}
            >
              🎂 Happy Birthday! 🎂
            </h1>
            
            <p
              style={{
                fontSize: isMobile ? "1rem" : "1.3rem",
                color: "white",
                textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
                fontStyle: "italic",
                animation: "fadeIn 2s ease-out 0.8s both",
              }}
            >
              Click on the memories around! 💕
            </p>
          </div>
        )}

        {/* Circular Cards Layout */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            width: containerSize.width,
            height: containerSize.height,
          }}
        >
          {cardsContent.map((card, index) => {
            const angle = (index / cardsContent.length) * 360;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  onClick={() => handleOpenCard(card)}
                  onTouchStart={() => handleCardTouch(index)}
                  style={{
                    cursor: "pointer",
                    width: cardSize.width,
                    height: cardSize.height,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: `linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 107, 157, 0.2))`,
                    backdropFilter: "blur(10px)",
                    borderRadius: "50%",
                    padding: "4px",
                    border: `3px solid ${GOLD_COLOR}`,
                    boxShadow: `0 8px 25px rgba(255, 107, 157, 0.4), 0 0 20px rgba(255, 215, 0, 0.3)`,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    animation: `popIn 0.6s ease-out ${index * 0.15 + 1}s both`,
                    transform: touchedCard === index 
                      ? "translate(-50%, -50%) scale(1.1) rotate(5deg)" 
                      : "translate(-50%, -50%) scale(1)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translate(-50%, -50%) scale(1.15) rotate(5deg)";
                    e.target.style.boxShadow = "0 12px 35px rgba(255, 107, 157, 0.6), 0 0 30px rgba(255, 215, 0, 0.5)";
                    e.target.style.borderColor = ACCENT_COLOR;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translate(-50%, -50%) scale(1)";
                    e.target.style.boxShadow = "0 8px 25px rgba(255, 107, 157, 0.4), 0 0 20px rgba(255, 215, 0, 0.3)";
                    e.target.style.borderColor = GOLD_COLOR;
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)",
                        animation: "shimmer 3s infinite",
                        zIndex: 1,
                      }}
                    />
                    <img
                      src={card.img}
                      alt={card.content}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                        filter: "brightness(1.1) contrast(1.1)",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Modal for Active Card */}
        {activeCard && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(12px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 20,
              padding: "20px",
              animation: "fadeIn 0.3s ease-out",
            }}
            onClick={handleCloseCard}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 107, 157, 0.1))`,
                backdropFilter: "blur(20px)",
                borderRadius: "25px",
                boxShadow: `0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 107, 157, 0.2)`,
                maxWidth: "90vw",
                maxHeight: "90vh",
                width: isMobile ? "320px" : isTablet ? "400px" : "500px",
                padding: "30px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                border: `2px solid ${GOLD_COLOR}`,
                animation: "modalIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              }}
            >
              <button
                onClick={handleCloseCard}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: ACCENT_COLOR,
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  fontSize: "20px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = NAVBAR_COLOR;
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = ACCENT_COLOR;
                  e.target.style.transform = "scale(1)";
                }}
              >
                ✕
              </button>

              <div
                style={{
                  width: isMobile ? "200px" : "280px",
                  height: isMobile ? "200px" : "280px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginBottom: "25px",
                  boxShadow: `0 15px 35px rgba(0, 0, 0, 0.3), 0 0 25px rgba(255, 107, 157, 0.3)`,
                  border: `4px solid ${GOLD_COLOR}`,
                  animation: "pulse 2s ease-in-out infinite",
                }}
              >
                <img
                  src={activeCard.img}
                  alt={activeCard.content}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(1.1) contrast(1.1)",
                  }}
                />
              </div>

              <p
                style={{
                  color: "#333",
                  fontSize: isMobile ? "0.95rem" : "1.1rem",
                  fontWeight: "600",
                  marginBottom: "25px",
                  lineHeight: 1.6,
                  textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                  padding: "0 10px",
                }}
              >
                {activeCard.content}
              </p>

              <button
                onClick={handleCloseCard}
                style={{
                  background: `linear-gradient(45deg, ${ACCENT_COLOR}, ${NAVBAR_COLOR})`,
                  color: "white",
                  border: "none",
                  padding: "15px 40px",
                  borderRadius: "25px",
                  fontWeight: "bold",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `linear-gradient(45deg, ${NAVBAR_COLOR}, ${ACCENT_COLOR})`;
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 8px 20px rgba(255, 107, 157, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = `linear-gradient(45deg, ${ACCENT_COLOR}, ${NAVBAR_COLOR})`;
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                💕 Sweet!
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LandingPage;