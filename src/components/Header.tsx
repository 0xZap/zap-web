// src/components/Header.tsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Box,
} from "@mui/material";
import logo from "../assets/logo-appname.svg";

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "center",
            position: "relative",
            paddingTop: "16px",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "white", position: "absolute", left: 0 }}
          >
            <img src={logo} alt="Logo" />
          </Typography>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              padding: "5px 10px",
              borderRadius: "30px",
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button sx={{color: "white"}}>Home</Button>
            <Button sx={{color: "white"}}>How it works</Button>
            <Button sx={{color: "white"}}>Product</Button>
            <Button sx={{color: "white"}}>Blogs</Button>
            <Button sx={{color: "white"}}>Use Cases</Button>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#B0B0B0",
              borderRadius: "20px",
              position: "absolute",
              right: 0,
              marginRight: 0,
              padding: "5px 20px",
            }}
          >
            Coming Soon
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;