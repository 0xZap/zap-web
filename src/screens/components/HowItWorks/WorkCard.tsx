import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

interface HowItWorksCardProps {
  number: string;
  title: string;
  imageSrc: string;
  isReversed?: boolean;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  number,
  title,
  imageSrc,
  isReversed = false,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const TextContent = () => (
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        paddingRight: { xs: 0, md: "32px" },
        marginBottom: { xs: "32px", md: 0 },
        textAlign: "center",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "-70px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "8rem",
          fontWeight: 700,
          color: "rgba(255, 255, 255, 0.1)",
          zIndex: 0,
        }}
      >
        {number}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: isSmallScreen ? "1.8rem" : "2.2rem",
          lineHeight: 1.3,
          color: "#FFFFFF",
          fontFamily: "Space Grotesk, sans-serif",
          fontWeight: 500,
          position: "relative",
          zIndex: 1,
        }}
      >
        {title.split("<br></br>").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < title.split("<br></br>").length - 1 && <br />}
          </React.Fragment>
        ))}
      </Typography>
    </Box>
  );

  const ImageContent = () => (
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        display: "flex",
        justifyContent: "center",
        padding: { xs: "16px", sm: "24px", md: "32px" },
      }}
    >
      <img
        src={require(`${imageSrc}`)}
        alt="How It Works"
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "8px",
        }}
      />
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        width: "80%",
        maxWidth: "1000px",
      }}
    >
      {isReversed ? (
        <>
          <ImageContent />
          <TextContent />
        </>
      ) : (
        <>
          <TextContent />
          <ImageContent />
        </>
      )}
    </Box>
  );
};

export default HowItWorksCard;
