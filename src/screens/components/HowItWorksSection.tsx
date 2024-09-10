import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import WorkCard01 from "./HowItWorks/WorkCard01";
import WorkCard02 from "./HowItWorks/WorkCard02";
import WorkCard03 from "./HowItWorks/WorkCard03";
import WorkCard04 from "./HowItWorks/WorkCard04";
import WorkCard05 from "./HowItWorks/WorkCard05";

const HowItWorksSection: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: "64px",
        textAlign: "center",
      }}
      id="How it works"
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
        How it Works
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: isSmallScreen ? "90%" : "600px",
          margin: "16px auto 0",
          textAlign: "center",
          fontSize: isSmallScreen ? "0.9rem" : "1rem",
          lineHeight: 1.5,
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "60px",
          fontFamily: "Space Grotesk, sans-serif",
          color: "#C2CDE7",
        }}
      >
        Zap is a tool that leverages zkTLS to allow anyone to generate ZkProofs
        to any internet data they have access to.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
          padding: { xs: "20px", sm: "40px" },
        }}
      >
        {/* Number 01 */}
        <WorkCard01 />

        {/* Number 02 */}
        <WorkCard02 />

        {/* Number 03 */}
        <WorkCard03 />

        {/* Number 04 */}
        <WorkCard04 />

        {/* Number 05 */}
        <WorkCard05 />
      </Box>
    </Box>
  );
};

export default HowItWorksSection;
