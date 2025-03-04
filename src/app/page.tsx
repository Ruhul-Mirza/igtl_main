"use client"
import React, { useEffect } from 'react';

import WhoWeAre from '../components/WhoWeAre';
import HomeHero from '../components/HomeHero';
import IndusriesWeServe from '../components/IndustriesWeServe';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialCarousel from '../components/TestimonialCarousel';
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection() {
 useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration in milliseconds
      once: true, // Whether animation should only run once
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <>
    <HomeHero/>
    <WhoWeAre/>
    <WhyChooseUs/>
    <IndusriesWeServe/>
    <TestimonialCarousel/>
    </>
  );
}

export default HeroSection;