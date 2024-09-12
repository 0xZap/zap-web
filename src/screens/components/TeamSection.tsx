import React from "react";
import { Box, Typography, useTheme, useMediaQuery, Grid } from "@mui/material";
import MyProfileCard from "./Team/ProfileCard";
import teamMembers from "../../utils/team";

const TeamSection: React.FC = () => {
  const theme = useTheme();
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md")); // Screen above 900px

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: "64px",
        textAlign: "center",
      }}
    >
      <Typography
        variant={isSmallMobile ? "h4" : "h3"}
        color="white"
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          padding: "0 20px",
          fontFamily: "Space Grotesk, sans-serif",
        }}
      >
        Our amazing team
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: isSmallMobile ? "90%" : "600px",
          margin: "16px auto 0",
          textAlign: "center",
          fontSize: isSmallMobile ? "0.9rem" : "1rem",
          lineHeight: 1.5,
          padding: "0 20px 60px",
          fontFamily: "Space Grotesk, sans-serif",
          color: "#C2CDE7",
        }}
      >
        Sunt officia minim exercitation in cupidatat veniam minim dolore mollit
        cillum do ea velit. Occaecat minim ipsum laboris do laborum
      </Typography>
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '60px auto 0',
          padding: { xs: '20px', md: '20px 40px' },
        }}
      >
        {isLargeScreen ? (
          <Grid
            container
            justifyContent="center"
            spacing={{ xs: 3, md: 7.5 }} // 24px for xs, 60px for md and up
            columns={{ xs: 1, sm: 2, md: 3 }}
          >
            {teamMembers.map((member, index) => (
              <Grid item xs={1} key={index}>
                <Box>
                  <MyProfileCard
                    name={member.name}
                    title={member.title}
                    image={member.image}
                    socialLinks={member.socialLinks}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: { xs: '40px', sm: '50px', md: '60px' },
              justifyContent: 'center',
              '& > *:last-child:nth-child(3n - 1)': {
                gridColumn: {
                  md: '2 / 3',
                },
              },
              '& > *:last-child:nth-child(3n - 2)': {
                gridColumn: {
                  md: '2 / 3',
                },
              },
            }}
          >
            {teamMembers.map((member, index) => (
              <Box
                key={index}
                sx={{
                  maxWidth: isSmallMobile ? '300px' : 'none',
                  margin: '0 auto',
                  width: '100%',
                }}
              >
                <MyProfileCard
                  name={member.name}
                  title={member.title}
                  image={member.image}
                  socialLinks={member.socialLinks}
                />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TeamSection;