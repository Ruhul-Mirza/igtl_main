"use client"
import React, { useEffect } from 'react';
import ServicesCarousel from '@/components/ServicesCarousel';
import { ArrowRight, Car,Cpu,Globe,MapPin,BatteryCharging } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

type SubService = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Service = {
  title: string;
  description: string;
  subServices: SubService[];
};

type ServicesData = {
  [key: string]: Service;
};

const servicesData: ServicesData = {
    "auto-tech": {
        title: "Automotive Tech & Support",
        description: "Advanced automotive solutions leveraging AI, IoT, and automation for smart and efficient mobility.",
        subServices: [
          {
            title: "Vehicle Diagnostics & Telematics",
            description: "Advanced diagnostics and real-time telematics solutions to optimize vehicle performance, safety, and predictive maintenance.",
            icon: <Car className="w-10 h-10 text-amber-500" />
          },
          {
            title: "Automotive Software Development",
            description: "Custom-built automotive software solutions for infotainment, in-vehicle systems, and automation technologies.",
            icon: <Cpu className="w-10 h-10 text-amber-500" />
          },
          {
            title: "IoT & Smart Vehicle Solutions",
            description: "Cutting-edge IoT integration to enable connected, intelligent vehicle solutions with real-time monitoring and data insights.",
            icon: <Globe className="w-10 h-10 text-amber-500" />
          },
          {
            title: "Fleet Management & Optimization",
            description: "AI-driven fleet tracking, route optimization, and predictive analytics to enhance fleet efficiency and reduce operational costs.",
            icon: <MapPin className="w-10 h-10 text-amber-500" />
          },
          {
            title: "EV & Autonomous Vehicle Support",
            description: "Next-generation solutions for electric and self-driving vehicles, supporting automation, battery management, and AI-driven mobility innovations.",
            icon: <BatteryCharging className="w-10 h-10 text-amber-500" />
          }
        ]
      }
};

export default function ServicePage() {
    useEffect(() => {
        AOS.init({
          duration: 700, // Animation duration in milliseconds
          once: true, // Whether animation should only run once
          easing: "ease-in-out", // Easing function
        });
      }, []);
  const serviceInfo = servicesData["auto-tech"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-gray-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-20 md:py-32" data-aos="fade-down">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-50 to-gray-50"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500 opacity-5 rounded-bl-full transform translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-amber-500 opacity-5 rounded-tr-full transform -translate-x-1/3 translate-y-1/4"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-6 py-2 bg-amber-100 rounded-full">
              <span className="text-amber-600 font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-amber-500">{serviceInfo.title.split('(')[0]}</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              {serviceInfo.description}
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-amber-500 text-white font-medium rounded-lg shadow-md hover:bg-amber-600 transition-colors duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {serviceInfo?.subServices?.length > 0 && (
        <section className="pb-8 pt-16 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Specialized Solutions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our comprehensive range of services designed to meet your specific business needs and drive growth.
              </p>
            </div>

            <ServicesCarousel subServices={serviceInfo.subServices} />
          </div>
        </section>
      )}
    </div>
  );
}
