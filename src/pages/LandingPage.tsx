// src/App.tsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { CssBaseline } from '@mui/material';

const LandingPage: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
};

export default LandingPage;
