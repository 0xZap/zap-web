// src/App.tsx
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { CssBaseline } from "@mui/material";
import SubscribeSection from "../components/SubscribeSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ProductsSection from "../components/ProductsSection";
import UseCaseSection from "../components/UseCaseSection";
// import BlogSection from "../components/BlogSection";
import TeamSection from "../components/TeamSection";

const LandingPage: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <ProductsSection />
      <UseCaseSection />
      {/* <BlogSection /> */}
      <TeamSection />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default LandingPage;
