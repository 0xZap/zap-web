import React, { useState } from "react";
import { Box, Typography, TextField, Button, useTheme } from "@mui/material";
import logo from "../../assets/footer/logo_footer.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import centerMask from '../../assets/footer/effect.svg';
import rightAsset from '../../assets/footer/right_asset.svg';
import leftAsset from '../../assets/footer/left_asset.svg';

const SubscribeSection: React.FC = () => {
  const theme = useTheme();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation pattern
  
    if (email.match(emailPattern)) {
      // Redirect user to Google Form (with optional pre-filled email address if needed)
      const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLScqf95GOc8xh_786mcBaPOGkUXg0MaGo40OTF0WZHcZ6sqzEg/viewform?usp=pp_url&entry.1879940689=${encodeURIComponent(email)}`;
      window.open(googleFormUrl, "_blank");
  
      setEmail(""); // Optionally reset the email state
    } else {
      toast.error("Please enter a valid email address", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };
  

  return (
    <Box
      sx={{
        position: "relative", // Makes the box a relative container for absolute positioning
        backgroundColor: "#0B0B0D",
        padding: "60px",
        borderRadius: "32px",
        border: `1px solid ${theme.palette.primary.main}`,
        width: {
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
        },
        margin: "60px auto",
        textAlign: "center",
        overflow: "hidden", // Ensures content doesn't overflow
      }}
    >
      {/* Left Background Image */}
      <Box
        component="img"
        src={leftAsset}
        alt=""
        sx={{
          position: "absolute",
          top: 0,
          left: 40,
          width: "150px", // Adjust as needed
          height: "auto",
          zIndex: 0, // Keep background behind content
        }}
      />

      {/* Center Background Image */}
      <Box
        component="img"
        src={centerMask}
        alt=""
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)", // Center the image horizontally
          width: "100%", // Adjust as needed
          height: "auto",
          zIndex: 0, // Keep background behind content
        }}
      />

      {/* Right Background Image */}
      <Box
        component="img"
        src={rightAsset}
        alt=""
        sx={{
          position: "absolute",
          top: 0,
          right: 40,
          width: "150px", // Adjust as needed
          height: "auto",
          zIndex: 0, // Keep background behind content
        }}
      />

      {/* Exposed Content */}
      <img
        src={logo}
        alt="Logo"
        width="72px"
        style={{ marginBottom: "20px", marginTop: "5px", zIndex: 1 }} // Ensure content is above background
      />
      <Typography variant="h4" sx={{ color: "white", marginBottom: "4px", zIndex: 1, fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
        Subscribe to Newsletter
      </Typography>
      <Typography variant="body1" sx={{ color: "#aaa", marginBottom: "48px", zIndex: 1 }}>
        Stay updated with the latest news by subscribing to our newsletter.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: "18px",
          zIndex: 1, // Keep content above the background
        }}
      >
        <TextField
          placeholder="Enter your Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            backgroundColor: "#2b2b2b",
            borderRadius: "6px",
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
            background: "#090953",
            color: "white",
            borderRadius: "12px",
            padding: "10px 20px",
            width: { xs: "100%", sm: "200px" },
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "transform 0.2s, box-shadow 0.2s",
            '&:hover': {
                backgroundColor: '#090953',
                cursor: 'pointer',
                transform: 'scale(1.05)', 
                boxShadow: theme.shadows[1], 
            },
          }}
        >
          Join Waitlist
        </Button>
      </Box>
      <ToastContainer style={{ zIndex: 1 }} /> {/* Ensure Toast is above background */}
    </Box>
  );
};

export default SubscribeSection;