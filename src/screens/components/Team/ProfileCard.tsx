import React from "react";
import { Card, CardContent, Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import "@fontsource/inter";

interface ProfileCardProps {
  name: string;
  title: string;
  image: string;
  socialLinks: {
    linkedin: string;
    x: string;
    facebook: string;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  image,
  socialLinks,
}) => {
  return (
    <Card
      sx={{
        minWidth: 250,
        maxWidth: 300,
        borderRadius: "20px",
        backgroundColor: "#222325",
        color: "#fff",
        overflow: "visible",
        position: "relative",
      }}
    >
      {/* Image container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          paddingLeft: "20px",
          paddingRight: "20px",
          top: "-20px", // Reduce the amount the image floats above the card
          marginBottom: "-20px",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: "100%", // Make the image responsive
            maxWidth: "196px", // Max dimensions to match card
            height: "auto", // Automatically adjust the height
            borderRadius: "13px", // Rounded corners
            objectFit: "cover", // Ensure the image covers the box proportionally
            aspectRatio: "1/1", // Ensure the image maintains a square aspect ratio
          }}
        />
      </Box>
      <CardContent sx={{ padding: "0" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontSize: "1.1rem", fontFamily: "Inter" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#ccc",
            fontSize: "0.9rem",
            marginBottom: "12px",
            fontFamily: "Inter",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
          }}
        >
          {/* Social media icons */}
          {Object.entries(socialLinks).map(([key, value]) => (
            <IconButton
              key={key}
              aria-label={key}
              sx={{
                backgroundColor: "#292929",
                color: "#fff",
                borderRadius: "50%",
                padding: "10px",
                "&:hover": {
                  backgroundColor: "#3b3b3b",
                },
              }}
              component="a"
              href={value}
              target="_blank"
              rel="noopener noreferrer"
            >
              {key === "linkedin" && <LinkedInIcon sx={{ fontSize: "20px" }} />}
              {key === "x" && <XIcon sx={{ fontSize: "20px" }} />}
              {key === "facebook" && (
                <TelegramIcon sx={{ fontSize: "20px" }} />
              )}
            </IconButton>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
