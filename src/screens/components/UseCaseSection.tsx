import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const UseCaseSection: React.FC = () => {
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
        Use Cases for our Solution
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
        Sunt officia minim exercitation in cupidatat veniam minim dolore mollit
        cillum do ea velit. Occaecat minim ipsum laboris do laborum
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gridTemplateAreas: {
            xs: '"use1" "use2" "use3" "use4"',
            sm: '"use1 use2" "use3 use4"',
          },
          gap: { xs: "24px", sm: "32px" },
          padding: { xs: "16px", sm: "24px" },
          maxWidth: "1200px",
          margin: "48px auto 0",
        }}
      >
        <Box sx={{ gridArea: { md: "use1" } }}>
          <img
            src={require("../../assets/usecase/use1.png")}
            alt="Use Case 1"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "450px",
              borderRadius: "8px",
            }}
          />
        </Box>
        <Box sx={{ gridArea: { md: "use2" } }}>
          <img
            src={require("../../assets/usecase/use2.png")}
            alt="Use Case 2"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "450px",
              borderRadius: "8px",
            }}
          />
        </Box>
        <Box sx={{ gridArea: { md: "use3" } }}>
          <img
            src={require("../../assets/usecase/use3.png")}
            alt="Use Case 3"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "450px",
              borderRadius: "8px",
            }}
          />
        </Box>
        <Box sx={{ gridArea: { md: "use4" } }}>
          <img
            src={require("../../assets/usecase/use4.png")}
            alt="Use Case 4"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "450px",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UseCaseSection;
