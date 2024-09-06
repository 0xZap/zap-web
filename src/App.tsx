import React from "react";
import { CssBaseline, Box } from "@mui/material";
import LandingPage from "./screens/pages/LandingPage";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // mobile phones
      sm: 600, // tablets
      md: 960, // small laptops
      lg: 1280, // desktops
      xl: 1920, // large screens
    },
  },
});

const Background = styled(Box)`
  background: linear-gradient(
    135deg,
    #000000,
    #090953,
    #000000,
    #00000f,
    #090953,
    #000000,
    #000000
  );
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// const Background = styled(Box)`
//   background: linear-gradient(
//     135deg,
//     #000000,
//     #000000,
//     #000000,
//     #000000,
//     #000000,
//     #000000,
//     #000000
//   );
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
// `;

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Background>
        <LandingPage />
      </Background>
    </>
  );
};

export default App;
