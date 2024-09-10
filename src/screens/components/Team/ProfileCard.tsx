// src/components/ProfileCard.tsx
import React from "react";
import { Card, CardContent, Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";

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
        maxWidth: 300, // Reduced max width
        borderRadius: "8px", // Reduced border radius
        backgroundColor: "#222325",
        color: "#fff",
        overflow: "visible", // Allow content to overflow for image
      }}
    >
      {/* Image container */}
      <Box
        sx={{
          height: 200, // Fixed height for image
          overflow: "hidden",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <img
          src={require("../../../assets/team/danilo.png")}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <CardContent sx={{ padding: "16px" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#ccc", fontSize: "0.9rem", marginBottom: "12px" }}
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
              {key === "facebook" && <TelegramIcon sx={{ fontSize: "20px" }} />}
            </IconButton>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
