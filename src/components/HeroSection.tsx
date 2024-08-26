import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import hero from "../assets/hero.png";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "64px",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          gutterBottom
          color="white"
          paddingLeft={"220px"}
          paddingRight={"220px"}
        >
          Allow anyone to generate ZkProofs to any internet
        </Typography>
        <Box
          sx={{
            marginLeft: "100px",
            marginTop: "24px",
            marginBottom: "44px",
            borderRadius: "44px",
            border: "1px solid #B0B0B0",
            overflow: "hidden",
            width: "943px",
            height: "428px",
          }}
        >
          <img src={hero} alt="Hero" width={943} height={428} />
        </Box>
        <Button
          variant="contained"
          sx={{
            opacity: 0.8,
            borderRadius: "20px",
            backgroundColor: "#0a365e",
            padding: "10px 30px",
            fontSize: "16px",
            textTransform: "none",
          }}
        >
          Coming Soon
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
