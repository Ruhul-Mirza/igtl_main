"use client"
import JobOpenings from "../../components/JobOpenings";
import WhyWorkWithUs from "../../components/WhyWorkWithUs";
import CareerHero from "../../components/CareerHero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Career(){
    useEffect(() => {
        AOS.init({
          duration: 700, // Animation duration in milliseconds
          once: true, // Whether animation should only run once
          easing: "ease-in-out", // Easing function
        });
      }, []);
    return(
        <>
        <CareerHero/>
        <WhyWorkWithUs/>
        <JobOpenings/>
        </>
    )
}