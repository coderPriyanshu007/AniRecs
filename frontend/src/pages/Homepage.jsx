import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import {  useRef } from "react";
import MainSection from "../components/MainSection";
import AboutUs from "../components/AboutUs";
import TopAnimeCarousel from "../components/TopAnimeCarousel";
import { motion } from "motion/react";

import Navbar from "../components/Navbar";

const Homepage = () => {
  const trendingRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <><Navbar />
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
    
      
      {/* Home section */}
      <HeroSection
        scrollToSection={scrollToSection}
        trendingRef={trendingRef}
      />

      {/* Top 10 anime */}
      <TopAnimeCarousel trendingRef={trendingRef} />

      {/* main section */}
      <MainSection />

     
      <AboutUs />

      <Footer />
    </div>
    </>
  );
};

export default Homepage;
