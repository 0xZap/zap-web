import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const HowItWorksSection: React.FC = () => {
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
        How it Works
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
          paddingRight: "20px",
          paddingBottom: "60px",
          fontFamily: "Space Grotesk, sans-serif",
          color: "#C2CDE7",
        }}
      >
        Zap is a tool that leverages zkTLS to allow anyone to generate ZkProofs
        to any internet data they have access to.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
          padding: { xs: "20px", sm: "40px" },
        }}
      >
        {/* Number 01 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            width: "80%",
            maxWidth: "1000px",
          }}
        >
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
              01
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
              User requests to <br></br> generate proof
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              padding: { xs: "16px", sm: "24px", md: "32px" },
            }}
          >
            <img
              src={require("../../assets/work/work1.png")}
              alt="How It Works"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>

        {/* Number 02 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            width: "80%",
            maxWidth: "1000px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              padding: { xs: "16px", sm: "24px", md: "32px" },
            }}
          >
            <img
              src={require("../../assets/work/work2.png")}
              alt="How It Works"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
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
              02
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
              SDK connects with <br></br> Zap Network
            </Typography>
          </Box>
        </Box>

        {/* Number 03 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            width: "80%",
            maxWidth: "1000px",
          }}
        >
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
              03
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
              SDK send HTTPS <br></br> request with Notary <br></br> Proof to
              Auth Servers
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              padding: { xs: "16px", sm: "24px", md: "32px" },
            }}
          >
            <img
              src={require("../../assets/work/work3.png")}
              alt="How It Works"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>

        {/* Number 04 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            width: "80%",
            maxWidth: "1000px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              padding: { xs: "16px", sm: "24px", md: "32px" },
            }}
          >
            <img
              src={require("../../assets/work/work4.png")}
              alt="How It Works"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
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
              04
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
              Zap SDK and Extension <br></br> verifies with Local or <br></br>{" "}
              External Verifier
            </Typography>
          </Box>
        </Box>

        {/* Number 05 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            width: "80%",
            maxWidth: "1000px",
          }}
        >
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
              05
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
              Share or Store <br></br> Data Proofs
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              padding: { xs: "16px", sm: "24px", md: "32px" },
            }}
          >
            <img
              src={require("../../assets/work/work5.png")}
              alt="How It Works"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorksSection;
