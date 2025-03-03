import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechGrowth Inc.",
    content: "This product transformed our workflow completely. We've seen a 40% increase in productivity since implementation. The customer support team has been incredibly responsive and helpful throughout the onboarding process."


  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "Innovate Solutions",
    content: "The integration capabilities are unmatched. We were able to connect all our existing systems with minimal effort. This has streamlined our operations and eliminated data silos that were holding us back."


  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Operations Manager",
    company: "Global Logistics",
    content: "The analytics dashboard provides insights we never had access to before. We can now make data-driven decisions quickly and confidently. This has been a game-changer for our strategic planning."


  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Product Manager",
    company: "Future Brands",
    content: "The user interface is intuitive and clean. Our team required minimal training to get up to speed. The customization options allow us to tailor the experience to our specific needs."


  },
  {
    id: 5,
    name: "Emma Wilson",
    role: "HR Director",
    company: "Talent First",
    content: "This solution has revolutionized our recruitment process. The automated screening saves us countless hours, and the candidate experience has improved significantly. Highly recommended for any HR team."


  }
];

const TestimonialCarousel: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
      dragFree: true
    },
    [
      Autoplay({ delay: 6000, stopOnInteraction: false, playOnInit: true })
    ]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our solutions have helped businesses transform their operations and achieve remarkable results.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 px-4 md:px-8 lg:px-12 transition-opacity duration-500"
                >
                  <div className="relative bg-white rounded-2xl border border-amber-700 p-8 md:p-10 h-full transform transition-all duration-500 overflow-hidden">
                    {/* Decorative accent */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200 to-amber-200 opacity-10 rounded-bl-full`}></div>



                    <p className="text-gray-700 text-base md:text-lg mb-8 italic leading-relaxed relative z-10">
                      "{testimonial.content}"
                    </p>

                    <div className="mt-auto pt-6 border-t border-zinc-200 relative z-10">
                      <h4 className="font-bold text-amber-500 text-lg">{testimonial.name}</h4>
                      <p className="text-orange-600 font-semibold">{testimonial.role}</p>
                      <p className="text-gray-500 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-0 md:-left-5 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg z-10 hover:bg-indigo-50 transition-all duration-300 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-orange-600" />
          </button>

          <button
            className="absolute top-1/2 right-0 md:-right-5 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg z-10 hover:bg-indigo-50 transition-all duration-300 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            onClick={scrollNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-orange-600" />
          </button>
        </div>

        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`transition-all duration-300 focus:outline-none ${index === selectedIndex
                ? 'w-8 h-2 bg-orange-400 rounded-full'
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400 rounded-full'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;