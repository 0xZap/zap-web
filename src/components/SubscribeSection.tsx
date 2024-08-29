import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      toast.success("Subscribed successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
      });
      setEmail("");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#050520",
        padding: "40px",
        borderRadius: "32px",
        border: "1px solid #333",
        width: {
          xs: "90%",
          sm: "80%", 
          md: "70%",
          lg: "60%", 
          xl: "50%", 
        },
        margin: "40px auto",
        textAlign: "center",
      }}
    >
      <img src={logo} alt="Logo" width="64px" style={{ marginBottom: "20px" }} />
      <Typography variant="h4" sx={{ color: "white", marginBottom: "4px" }}>
        Subscribe to Newsletter
      </Typography>
      <Typography variant="body1" sx={{ color: "#aaa", marginBottom: "32px" }}>
        Stay updated with the latest news by subscribing to our newsletter.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: "16px",
        }}
      >
        <TextField
          placeholder="Enter your Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            backgroundColor: "#2b2b2b",
            borderRadius: "16px",
            input: { color: "white" },
            "&:hover fieldset": {
              borderColor: "#555",
            },
            width: "100%",
            maxWidth: { xs: "100%", sm: "500px" },
          }}
        />
        <Button
          variant="contained"
          onClick={handleSubscribe}
          sx={{
            background: "linear-gradient(45deg, #00c6ff, #0072ff)",
            color: "white",
            borderRadius: "16px",
            padding: "10px 20px",
            width: { xs: "100%", sm: "200px" },
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          Join Waitlist
        </Button>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default SubscribeSection;