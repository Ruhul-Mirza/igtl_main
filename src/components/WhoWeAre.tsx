"use client";

import React from 'react';
import {
  Users,
  Lightbulb,
  ShieldCheck,
  Star,
  RefreshCw,
  Handshake,
ArrowRight,
  Leaf,
} from "lucide-react"
import WhoWeAre1 from "../../public/WhoWeAre1.avif"
import Image from 'next/image';
import Link from 'next/link';

function WhoWeAre() {
const coreValueCards = [
  {
    id: "01",
    title: "Customer-Centricity",
    icon: Users,
    content:
      "We put our clients at the heart of every solution. Every service is tailored to deliver exceptional experiences and measurable outcomes.",
  },
  {
    id: "02",
    title: "Innovation",
    icon: Lightbulb,
    content:
      "We foster a culture of continuous improvement and embrace emerging technologies to offer smarter, faster, and more effective solutions.",
  },
  {
    id: "03",
    title: "Integrity",
    icon: ShieldCheck,
    content:
      "We believe in doing what’s right. Transparency, ethical conduct, and honesty guide our relationships with clients, employees, and stakeholders.",
  },
  {
    id: "04",
    title: "Excellence",
    icon: Star,
    content:
      "From service delivery to customer engagement, we maintain high standards of quality, accountability, and performance at all times.",
  },
  {
    id: "05",
    title: "Agility",
    icon: RefreshCw,
    content:
      "In a constantly evolving business landscape, we adapt quickly and think ahead, ensuring our clients remain future-ready.",
  },
  {
    id: "06",
    title: "Collaboration",
    icon: Handshake,
    content:
      "We believe the best outcomes are achieved through teamwork—both internally and with our clients—by sharing knowledge, resources, and insights.",
  },
  {
    id: "07",
    title: "Responsibility",
    icon: Leaf,
    content:
      "As a forward-thinking organization, we are committed to diversity, equity, inclusion, and environmental sustainability in every sphere of our operations.",
  },
]
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with improved responsiveness */}
      <section
        className="relative min-h-screen flex items-center"
        data-aos="fade-right"
        data-aos-offset="300"
      >
        {/* Background Image + Overlay */}
        <div className="absolute inset-0">
          <Image
            src={WhoWeAre1}
            alt="Professional office environment"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
        </div>

        {/* Content Container */}
        <div className="container relative z-10 px-4 sm:px-6 lg:px-12 mx-auto">
          <div className="max-w-4xl text-white my-20">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Who We Are?
            </h1>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-orange-400 mb-6">
              A Global Force in Outsourcing, Analytics, and Digital Transformation
            </h2>

            {/* Description */}
            <div className="space-y-5 text-white/90 text-base sm:text-lg md:text-xl leading-relaxed font-light">
              <p>
                InfiGlobal Techlogix Pvt Ltd (IGTL) is a purpose-driven organization committed to redefining the way businesses operate and grow in a digitally connected world. We are not just a service provider.<br />
                <span className='block text-orange-500 font-semibold mb-5 mt-3'>— we are strategic partners who embed ourselves in your business challenges to co-create long-term, sustainable success.</span>
              </p>
              <p>
                Founded with the belief that innovation and operational excellence must go hand in hand, IGTL blends the power of technology with deep domain expertise to build customized solutions for clients across industries and geographies.
              </p>
              <p>
                With a talented workforce operating from delivery centers in India and serving clients worldwide, we deliver outcomes that go beyond cost savings. We focus on improving speed to market, enhancing customer experience, driving data-based decisions, and accelerating transformation agendas for organizations of all sizes.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link href="/about">
                <button className="group inline-flex items-center gap-2 bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Discover More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
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