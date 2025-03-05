"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import Link from 'next/link';

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

function HomeHero() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);
    const features = [
        { title: "BPO Services", description: "Expert guidance to transform your business" },
        { title: "KPO Services", description: "Tailored solutions for your unique needs" },
        { title: "Technology & Solutions", description: "Beautiful experiences that engage users" },
        { title: "Automotive Tech & Support", description: "Insights that drive business decisions" }
    ];

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        // Auto-rotate features
        intervalRef.current = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 3000);

        return () => {
            clearTimeout(timer);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [features.length]);


    return (
        <>
            <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-16 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 -left-24 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gray-300/40 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-24 sm:pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div
                                    className={cn(
                                        "inline-block px-4 py-1 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full border border-orange-200 transition-all duration-700 transform",
                                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    )}
                                >
                                    <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-600">
                                        Innovate • Create • Deliver
                                    </span>
                                </div>

                                <h1
                                    className={cn(
                                        "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 transition-all duration-700 delay-100 transform",
                                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    )}
                                >
                                    <p>Welcome to {""}<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
                                        IGTL
                                    </span></p>

                                </h1>

                                <p
                                    className={cn(
                                        "mt-6 text-md sm:text-lg text-gray-600 max-w-2xl transition-all duration-700 delay-200 transform",
                                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    )}
                                >
                                    Your Trusted Partner in BPO, KPO & Technology Solutions. We specialize in delivering cutting-edge business process outsourcing (BPO), knowledge process outsourcing (KPO), and innovative technology solutions designed to drive business growth, enhance operational efficiency, and optimize customer engagement.
                                </p>
                            </div>

                            <div
                                className={cn(
                                    "flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 transform",
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                )}
                            >
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-3 hover:opacity-100 opacity-75 overflow-hidden font-bold text-white rounded-md shadow-2xl bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 "
                                >

                                    <span className="flex items-center">
                                        Get Started
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Link>

                            </div>

                            {/* Rotating Features */}
                            <div
                                className={cn(
                                    "pt-8 transition-all duration-700 delay-400 transform",
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                )}
                            >
                                <div className="flex space-x-2 mb-4">
                                    {features.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveFeature(index)}
                                            className={cn(
                                                "w-2 h-2 rounded-full transition-all duration-300",
                                                activeFeature === index
                                                    ? "bg-orange-500 w-8"
                                                    : "bg-gray-300 hover:bg-orange-300"
                                            )}
                                        />
                                    ))}
                                </div>

                                <div className="relative h-20">
                                    {features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className={cn(
                                                "absolute top-0 left-0 w-full transition-all duration-500 transform",
                                                activeFeature === index
                                                    ? "opacity-100 translate-y-0"
                                                    : "opacity-0 translate-y-4 pointer-events-none"
                                            )}
                                        >
                                            <div className="flex items-start">
                                                <CheckCircle className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                                                    <p className="text-gray-600">{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Simple Right Side Element - Abstract Logo Animation */}
                        <div
  className={cn(
    "relative transition-all duration-1000 delay-300 transform",
    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
  )}
>
  <div className="relative mx-auto w-full max-w-60 sm:max-w-sm md:max-w-md  aspect-square flex items-center justify-center">
    {/* Background glow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-2/3 sm:w-3/4 h-2/3 sm:h-3/4 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full filter blur-xl animate-pulse"></div>
    </div>

    {/* Main logo circle */}
    <div className="relative w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden border border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50"></div>

      {/* Animated rings */}
      <div className="absolute inset-0 w-full h-full animate-spin-slow" style={{ animationDuration: '20s' }}>
        <div className="absolute inset-3 sm:inset-4 border-2 border-dashed border-orange-200 rounded-full"></div>
      </div>
      <div className="absolute inset-0 w-full h-full animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
        <div className="absolute inset-6 sm:inset-8 border-2 border-dashed border-yellow-200 rounded-full"></div>
      </div>

      {/* Center logo */}
      <div className="relative z-10 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full shadow-lg flex items-center justify-center">
        <Zap className="h-8 sm:h-12 w-8 sm:w-12 text-white" />
      </div>
    </div>

    {/* Floating text elements */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-white px-4 sm:px-6 py-1 sm:py-2 rounded-full shadow-lg animate-float" style={{ animationDuration: '4s' }}>
        <span className="text-xs sm:text-sm  lg:text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
          Innovation
        </span>
      </div>
    </div>

    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
      <div className="bg-white px-4 sm:px-6 py-1 sm:py-2 rounded-full shadow-lg animate-float" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}>
        <span className="text-xs sm:text-sm lg:text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
          Excellence
        </span>
      </div>
    </div>

    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-white px-4 sm:px-6 py-1 sm:py-2 rounded-full shadow-lg animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }}>
        <span className="text-xs sm:text-sm lg:text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
          Solutions
        </span>
      </div>
    </div>

    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
      <div className="bg-white px-4 sm:px-6 py-1 sm:py-2 rounded-full shadow-lg animate-float" style={{ animationDuration: '4.2s', animationDelay: '1.5s' }}>
        <span className="text-xs sm:text-sm lg:text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
          Growth
        </span>
      </div>
    </div>
  </div>
</div>

                    </div>
                </div>


            </div>

        </>
    );
}

export default HomeHero;