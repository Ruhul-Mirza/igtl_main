"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, DollarSign, TrendingUp, Users, Cpu, Layers } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const advantages = [
  {
    icon: DollarSign,
    iconColor: "text-white",
    iconBg: "bg-gradient-to-r from-orange-500 to-amber-400",
    cardBg: "bg-gradient-to-br from-orange-50 to-amber-40",
    borderColor: "border-orange-300",
    title: "Competitive Compensation",
    description: "We offer attractive salary packages and benefits to reward your hard work.",
    titleColor: "text-orange-700",
    descriptionColor:"text-orange-700"
  },
  {
    icon: TrendingUp,
    iconColor: "text-white",
    iconBg: "bg-gradient-to-r from-orange-500 to-amber-400",
    borderColor: "border-orange-300",
    title: "Career Advancement",
    description: "Explore numerous opportunities for growth and professional development.",
    titleColor: "text-orange-700",
    descriptionColor:"text-orange-700"
  },
  {
    icon: Users,
    iconColor: "text-white",
    iconBg: "bg-gradient-to-r from-orange-500 to-amber-400",
    borderColor: "border-orange-300",
    title: "Inclusive Culture",
    description: "Join a diverse, inclusive, and dynamic workplace that values every voice.",
    titleColor: "text-orange-700",
    descriptionColor:"text-orange-700"
  },
  {
    icon: Cpu,
    iconColor: "text-white",
    iconBg: "bg-gradient-to-r from-orange-500 to-amber-400",
    borderColor: "border-orange-300",
    title: "Cutting-Edge Technology",
    description: "Gain exposure to the latest technologies and industry trends.",
    titleColor: "text-orange-700",
    descriptionColor:"text-orange-700"
  },
  {
    icon: Layers,
    iconColor: "text-white",
    iconBg: "bg-gradient-to-r from-orange-500 to-amber-400",
    borderColor: "border-orange-300",
    title: "Collaboration & Excellence",
    description: "Work with a team of professionals dedicated to delivering excellence.",
    titleColor: "text-orange-700",
    descriptionColor:"text-orange-700"
  }
];

export default function AdvantagesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 1 }
    }
  });
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 relative">
       
          
          <div className="relative z-10">
            <p className="inline-block px-4 py-1 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full border border-orange-200 transition-all duration-700 transform"><span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-600">Our Advantages</span></p>
            
            <div className="flex items-center justify-between mt-3">
              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300 leading-tight">
                  Why Work With Us?
                </h2>

              </div>
              
              <div className="hidden md:flex space-x-4">
                <button 
                  className="p-3 rounded-full bg-white cursor-pointer transition-all duration-200 disabled:opacity-50 border border-gray-100 group"
                  onClick={scrollPrev} 
                  disabled={prevBtnDisabled}
                >
                  <ArrowLeft size={20} className="text-yellow-500 group-hover:text-orange-600 transition-colors" />
                </button>
                <button 
                  className="p-3 rounded-full bg-white cursor-pointer transition-all duration-200 disabled:opacity-50 border border-gray-100 group" 
                  onClick={scrollNext} 
                  disabled={nextBtnDisabled}
                >
                  <ArrowRight size={20} className="text-yellow-500 group-hover:text-orange-600 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_33.33%] pl-4 first:pl-0 pr-4">
                  <div className={` p-8 rounded-lg bg-gradient-to-br from-orange-50 to-amber-40 shadow-md h-full border ${advantage.borderColor}`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${advantage.iconBg} shadow-md`}>
                      <Icon className={`w-8 h-8 ${advantage.iconColor}`} />
                    </div>
                    <h3 className={`text-lg font-semibold mb-3 ${advantage.titleColor}`}>{advantage.title}</h3>
                    <p className={`${advantage.descriptionColor}`}>{advantage.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-4">
            <button 
              className="p-3 rounded-full bg-white cursor-pointer transition-all duration-200 disabled:opacity-50 border border-gray-100 group"
              onClick={scrollPrev} 
              disabled={prevBtnDisabled}
            >
              <ArrowLeft size={20} className="text-yellow-500 group-hover:text-orange-600 transition-colors" />
            </button>
            <button 
              className="p-3 rounded-full bg-white cursor-pointer transition-all duration-200 disabled:opacity-50 border border-gray-100 group" 
              onClick={scrollNext} 
              disabled={nextBtnDisabled}
            >
              <ArrowRight size={20} className="text-yellow-500 group-hover:text-orange-600 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}