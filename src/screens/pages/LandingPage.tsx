// src/App.tsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { CssBaseline } from '@mui/material';
import SubscribeSection from '../components/SubscribeSection';

const LandingPage: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <HeroSection />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default LandingPage;
