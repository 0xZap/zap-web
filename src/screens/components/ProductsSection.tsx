import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const ProductsSection: React.FC = () => {
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
      id="Product"
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
        Products
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
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: "24px",
          padding: { xs: "20px", md: "20px 60px" },
          maxWidth: "1200px",
          marginTop: "60px",
          margin: "0 auto",
        }}
      >
        <Box sx={{ gridArea: { md: "product1" } }}>
          <img
            src={require("../../assets/product/product1.png")}
            alt="Product 1"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "300px",
              borderRadius: "8px",
            }}
          />
        </Box>
        <Box sx={{ gridArea: { md: "product2" } }}>
          <img
            src={require("../../assets/product/product2.png")}
            alt="Product 2"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "300px",
              borderRadius: "8px",
            }}
          />
        </Box>
        <Box sx={{ gridArea: { md: "product3" } }}>
          <img
            src={require("../../assets/product/product3.png")}
            alt="Product 3"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "300px",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsSection;
