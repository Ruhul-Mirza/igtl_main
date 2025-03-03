"use client"
import React from 'react';
import WhoWeAre from './WhoWeAre';
import HomeHero from './HomeHero';
import IndusriesWeServe from './IndustriesWeServe';
import WhyChooseUs from './WhyChooseUs';
import TestimonialCarousel from './TestimonialCarousel';

function HeroSection() {


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