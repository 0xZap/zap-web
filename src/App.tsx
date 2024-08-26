import React from "react";
import { CssBaseline, Box } from "@mui/material";
import LandingPage from "./pages/LandingPage";
import styled from "styled-components";

const Background = styled(Box)`
  background: linear-gradient(135deg, #000000, #00000f, #00000f, #0000ff, #00000f, #000000, #000000);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

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
