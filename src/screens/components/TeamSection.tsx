import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ProfileCard from "./Team/ProfileCard";
import teamMembers from "../../utils/team";

interface TeamSectionProps {
  id: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ id }) => {
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
        Our amazing team
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
          justifyContent: "center",
          gap: "60px",
          padding: { xs: "20px", md: "20px 40px" },
          maxWidth: "1200px",
          marginTop: "60px",
          margin: "0 auto",
        }}
      >
        {teamMembers.map((member, index) => (
          <Box sx={{ gridArea: { md: `card${index + 1}` } }} key={index}>
            <ProfileCard
              name={member.name}
              title={member.title}
              image={member.image}
              socialLinks={member.socialLinks}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TeamSection;
