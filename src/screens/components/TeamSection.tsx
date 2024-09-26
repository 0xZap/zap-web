import React from "react";
import { Box } from "@mui/material";
import ProfileCard from "./Team/ProfileCard";
import teamMembers from "../../utils/team";
import TeamTitle from "./Team/TeamTitle";

interface TeamSectionProps {
  id: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ id }) => {

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
      <TeamTitle />
      <Box
        sx={{
          display: "grid", // Change display to grid
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, // 1 column for xs, 2 columns for sm, 3 columns for md and up
          justifyItems: "center",
          gap: "100px", // Gap between the cards
          padding: { xs: "20px", md: "20px 40px" },
          maxWidth: "1000px",
          marginTop: "80px",
          margin: "0 auto",
        }}
      >
        {teamMembers.map((member, index) => (
          <Box key={index} sx={{background: "transparent"}}>
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
