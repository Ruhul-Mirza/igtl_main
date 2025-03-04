"use client"
import AboutHero from "../../components/AboutHero"
import AboutSection from "../../components/AboutSection"
import AOS from "aos";
import "aos/dist/aos.css";
import VisionMission from "../../components/VisionMission"
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        AOS.init({
          duration: 700, // Animation duration in milliseconds
          once: true, // Whether animation should only run once
          easing: "ease-in-out", // Easing function
        });
      }, []);
    return (
        <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100">
            <AboutHero />
            <AboutSection />
            <VisionMission />
        </main>
    )
}