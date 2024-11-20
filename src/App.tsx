import React from "react";
import { CssBaseline, Box } from "@mui/material";
import LandingPage from "./screens/pages/LandingPage";
import ProjectsPage from "./screens/pages/ProjectsPage";
import styled from "styled-components";
import { ThemeProvider } from "@mui/material/styles";
import theme from './utils/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Background>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </BrowserRouter>
      </Background>
    </ThemeProvider>
  );
};

export default App;
