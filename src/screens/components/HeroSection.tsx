import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import hero from "../../assets/hero_bkg.png";
import zapicon from "../../assets/hero_zap.png";

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: "150px",
        textAlign: "center",
      }}
      id={id}
    >
      <Typography
        variant={isSmallScreen ? "h4" : "h3"}
        color="white"
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
          fontFamily: "Space Grotesk, sans-serif",
        }}
      >
        Building Decentralized Infrastructure for <br></br> Data as an Asset Market
      </Typography>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          margin: "24px auto",
          width: {
            xs: "90%",
            sm: "80%",
            md: "70%",
            lg: "60%",
            xl: "50%",
          },
          height: "360px", // Adjust this value based on your needs
        }}
      >
        <Box
          component="img"
          src={hero}
          alt="Hero"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        />
        <Box
          component="img"
          src={zapicon}
          alt="Overlay"
          sx={{
            position: "absolute",
            width: "auto", // Changed from 100% to auto
            height: "auto",
            top: "45%", // Centered vertically
            left: "50%", // Centered horizontally
            transform: "translate(-50%, -50%)", // Center the image
            zIndex: 2,
          }}
        />
        {/* Add more image layers as needed */}
      </Box>
      <Button
        variant="contained"
        sx={{
          opacity: 0.8,
          borderRadius: "20px",
          backgroundColor: "#0a365e",
          padding: "8px 30px",
          fontSize: "16px",
          textTransform: "none",
          marginTop: "20px",
        }}
      >
        Coming Soon
      </Button>
    </Box>
  );
};

export default HeroSection;
