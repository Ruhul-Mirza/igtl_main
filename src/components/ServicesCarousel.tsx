'use client';

import { useEffect, useRef, useState } from 'react';

interface SubService {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServicesCarouselProps {
  subServices: SubService[];
}

export default function ServicesCarousel({ subServices }: ServicesCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    const slideContainer = slideContainerRef.current;
    if (!carousel || !slideContainer) return;

    const slidesPerView = isMobile ? 1 : 2;
    const totalSlides = subServices.length;
    const maxIndex = Math.ceil(totalSlides / slidesPerView);

    const moveToSlide = (index: number) => {
      if (!slideContainer || !carousel || isAnimating) return;
      const slideWidth = carousel.offsetWidth;
      
      let nextIndex = index;
      if (index >= maxIndex) {
        nextIndex = 0;
      }

      setIsAnimating(true);
      const offset = nextIndex * slideWidth;
      slideContainer.style.transform = `translateX(-${offset}px)`;
      setCurrentIndex(nextIndex);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    };

    const interval = setInterval(() => {
      if (!isAnimating) {
        moveToSlide(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, subServices, isMobile, isAnimating]);

  const goToSlide = (index: number) => {
    if (!slideContainerRef.current || !carouselRef.current || isAnimating) return;
    const slideWidth = carouselRef.current.offsetWidth;
    slideContainerRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
    setCurrentIndex(index);
  };

  const totalGroups = Math.ceil(subServices.length / (isMobile ? 1 : 2));

  return (
    <div className="relative px-4 md:px-8">
      <div 
        className="relative overflow-hidden rounded-xl"
        ref={carouselRef}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 pointer-events-none z-10"></div>
        
        <div 
          ref={slideContainerRef}
          className="flex transition-transform duration-500 ease-out will-change-transform"
          style={{ width: `${100 * totalGroups}%` }}
        >
          {Array.from({ length: totalGroups }).map((_, groupIndex) => (
            <div
              key={groupIndex}
              className="flex w-full"
            >
              {subServices.slice(
                groupIndex * (isMobile ? 1 : 2),
                groupIndex * (isMobile ? 1 : 2) + (isMobile ? 1 : 2)
              ).map((subService, index) => (
                <div
                  key={index}
                  className={`${isMobile ? 'w-full' : 'w-1/2'} flex-shrink-0 p-4`}
                >
                  <div className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 ease-in-out border border-gray-100 hover:border-amber-200">
                    {/* Top Gradient Bar */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 transform origin-left transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100"></div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <div className="mb-6 p-4 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl inline-block transform transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
                        {subService.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                        {subService.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-gray-700">
                        {subService.description}
                      </p>
                      
                      {/* Decorative Elements */}
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-100/20 to-transparent rounded-tl-full transform translate-y-12 translate-x-12 group-hover:translate-y-8 group-hover:translate-x-8 transition-transform duration-500 ease-out"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {Array.from({ length: totalGroups }).map((_, index) => (
          <button
            key={index}
            onClick={() => !isAnimating && goToSlide(index)}
            className={`group relative w-3 h-3 transition-all duration-300 ${
              isAnimating ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={`
              absolute inset-0 rounded-full transition-all duration-300
              ${currentIndex === index 
                ? 'bg-amber-500 scale-100' 
                : 'bg-amber-200 scale-75 group-hover:scale-100 group-hover:bg-amber-300'
              }
            `}></span>
          </button>
        ))}
      </div>
    </div>
  );
}