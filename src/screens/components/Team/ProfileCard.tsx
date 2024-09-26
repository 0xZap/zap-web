// src/components/ProfileCard.tsx
import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
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
    telegram: string;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  image,
  socialLinks,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "270px",
        maxWidth: "500px",
        position: "relative",
        margin: "0 auto",
        zIndex: 1,
        background: "transparent",
        boxShadow: theme.shadows[0],
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)', 
          background: "transparent",
          // boxShadow: theme.shadows[1], 
        },
      }}
    >
      {/* Image positioned above the card */}
      <Box
        sx={{
          position: "absolute",
          top: "-60px", // Adjust to position the image above the card
          left: "50%",
          transform: "translateX(-50%)",
          width: "180px", // Square image
          height: "180px",
          borderRadius: "16px", // Rounded corners for the image
          overflow: "hidden", // Ensures the image fits within the border-radius
          zIndex: 2, // Keep it above the card
          background: "transparent",
          boxShadow: theme.shadows[0],
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Card
        sx={{
          position: "absolute",
          left: "50%",
          top: "5px",
          transform: "translateX(-50%)",
          width: "260px", // Square image
          height: "100px",
          borderRadius: "12px", // Card with rounded corners
          background: "#4460EC",
          overflow: "hidden",
          paddingTop: "100px", // Space for the image
          boxShadow: theme.shadows[0],
          zIndex: -20,
        }}
      ></Card>

      {/* Card with clip-path to cut the top-right corner */}
      <Card
        sx={{
          borderRadius: "16px", // Card with rounded corners
          background: "#222325",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          paddingTop: "100px", // Space for the image
          boxShadow: theme.shadows[0],
          borderTopRightRadius: "60px",
          clipPath: `polygon(
            0 0, /* Top-left */
            calc(100% - 40px) 0, /* Near the top-right, leaving some space */
            100% 40px, /* Create the cut in the top-right */
            100% 100%, /* Bottom-right */
            0 100%, /* Bottom-left */
            0 0 /* Back to top-left */
          )`, 
        }}
      >
        <CardContent sx={{ padding: "16px" }}>
          <Typography
            variant="h6"
            sx={{
              paddingTop: theme.spacing(2),
              background: `linear-gradient(to bottom, #ffffff, #a0aec0)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              fontSize: { xs: "1rem", sm: "1.25rem" },
              marginBottom: "-4px",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#a0aec0", fontSize: "0.9rem", marginBottom: "12px" }}
          >
            {title}
          </Typography>

          {/* Social media icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
            }}
          >
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
                {key === "x" && <XIcon sx={{ fontSize: "20px" }} />}
                {key === "telegram" && <TelegramIcon sx={{ fontSize: "20px" }} />}
                {key === "linkedin" && <LinkedInIcon sx={{ fontSize: "20px" }} />}
              </IconButton>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfileCard;
