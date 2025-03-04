"use client";

import React from 'react';
import { ArrowRight, Zap,  BarChart, GlobeIcon, ShieldCheck } from 'lucide-react';
import WhoWeAre1 from "../../public/WhoWeAre1.avif"
import Image from 'next/image';

function WhoWeAre() {
  const coreValueCards = [
    {
      id: "01",
      title: "Customer-First Approach",
      icon: Zap,
      content: "We prioritize your needs and goals to deliver tailored solutions that exceed expectations and drive meaningful results.",
    }, {
      id: "02",
      title: "Enhanced Efficiency",
      icon: BarChart,
      content: "Our solutions streamline operations and boost productivity to help your business achieve optimal performance levels.",
    }, {
      id: "03",
      title: "Global Expertise",
      icon: GlobeIcon,
      content: "We bring international experience and knowledge to solve complex challenges across diverse industries.",
    }, {
      id: "04",
      title: "Reliability & Excellence",
      icon: ShieldCheck,
      content: "Count on us for consistent, high-quality delivery on every project with unwavering commitment to excellence.",
    }
  ]
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with improved responsiveness */}
      <section className="relative min-h-[80vh] flex items-center" data-aos="fade-right"
     data-aos-offset="300"
     >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10"></div>
          <Image
            src={WhoWeAre1}
            alt="Professional office environment"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Who We Are ???
            </h1>

            <p className="text-md sm:text-ld md:text-xl text-white/90 font-light leading-relaxed mb-8 md:mb-10 max-w-2xl">
              At IGTL, we are a team of industry experts committed to transforming businesses through innovative outsourcing and technology solutions.
            </p>
            <button className="group inline-flex items-center gap-2 bg-orange-500 text-white px-6 sm:px-8 py-3 cursor-pointer rounded-md hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="font-medium tracking-wide">DISCOVER MORE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section with improved layout */}
      <section className="py-16 md:py-24 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a customer-first approach, we provide customized, high-quality services that enhance efficiency, reduce costs, and drive sustainable growth.
            </p>
          </div>


          {/* Feature Cards - Completely redesigned for perfect responsiveness */}
          <div className="mt-16">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" data-aos="fade-up"
     >
              {coreValueCards.map((coreValueCard, index) => {
                const Icon = coreValueCard.icon

                return (
                  <div key={index} className="group bg-white rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                    <div className="relative h-3 bg-orange-500 w-full">
                      <div className="absolute top-0 right-0 w-12 h-12 bg-orange-500 rotate-45 translate-x-6 -translate-y-6"></div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-50 border-2 border-orange-500 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                          <span className="text-lg font-bold">{coreValueCard.id}</span>
                        </div>
                        <Icon className="w-6 h-6 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                        {coreValueCard.title}
                      </h4>

                      <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-orange-300 mb-4 transition-all duration-500"></div>

                      <p className="text-gray-600 leading-relaxed flex-grow">
                          {coreValueCard.content}
                      </p>

                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default WhoWeAre;