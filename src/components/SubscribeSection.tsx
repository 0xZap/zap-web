import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // You can add your email subscription logic here
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
        padding: "40px 40px",
        borderRadius: "16px",
        width: "50%",
        borderWidth: "1px",
        borderColor: "#333",
        borderStyle: "solid",
        maxWidth: "1200px",
        marginTop: "40px",
        textAlign: "center",
        alignSelf: "center",
      }}
    >
      <Box sx={{ zIndex: 1, position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img src={logo} alt="Logo" height="40" />
        </Box>
        <Typography variant="h4" sx={{ color: "white", marginBottom: "16px" }}>
          Subscribe to Newsletter
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#aaa", marginBottom: "24px" }}
        >
          Stay updated with the latest news by subscribing to our newsletter.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            }}
            fullWidth
          />
          <Button
            variant="contained"
            onClick={handleSubscribe}
            sx={{
              backgroundColor: "linear-gradient(45deg, #00c6ff, #0072ff)",
              color: "white",
              borderRadius: "24px",
              padding: "10px 20px",
              marginLeft: "12px",
              width: "200px",
              boxShadow: "0 4px 20px rgba(0, 118, 255, 0.5)",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            Join Waitlist
          </Button>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default SubscribeSection;
