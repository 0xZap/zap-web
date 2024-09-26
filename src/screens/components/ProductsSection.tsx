import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ProductTitle from "./Product/ProductTitle";

interface ProductSectionProps {
  id: string;
}

const ProductsSection: React.FC<ProductSectionProps> = ({ id }) => {
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
      id={id}
    >
      <ProductTitle />
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
