import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import hero from "../../assets/hero.png";

const HeroSection: React.FC = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: "64px",
        textAlign: 'center'
      }}
    >
        <Typography
          variant={isSmallScreen ? 'h4' : 'h3'}
          color="white"
          sx={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          Allow anyone to generate ZkProofs to any internet
        </Typography>
        <Box
          sx={{
            borderRadius: "32px",
            border: "1px solid #B0B0B0",
            overflow: "hidden",
            margin: "24px auto",
            width: {
              xs: "90%",
              sm: "80%", 
              md: "70%",
              lg: "60%", 
              xl: "50%", 
            },
          }}
        >
          <img
            src={hero}
            alt="Hero"
            style={{
              width: "100%", // Full width for the image to make it responsive
            }}
          />
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