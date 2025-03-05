import React from 'react';
import { 
  Car, 
  ShoppingCart, 
  Landmark, 
  Phone, 
  Plane, 
  Store, 
  BarChart3 
} from 'lucide-react';

function IndusriesWeServe() {
  const industries = [
    {
      icon: <Car size={24} />,
      title: "Automotive & Transportation",
      description: "Innovative solutions driving the future of mobility and transportation systems."
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "E-commerce",
      description: "Cutting-edge platforms that transform online shopping experiences."
    },
    {
      icon: <Store size={24} />,
      title: "Retail & Consumer Services",
      description: "Transformative solutions enhancing the retail customer journey."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Research & Analytics",
      description: "Data-driven insights powering informed business decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 mx-auto">
          <div className="flex items-center mb-3">
            <div className="h-[2px] w-8 bg-yellow-500"></div>
            <p className="text-yellow-500 uppercase tracking-[0.2em] text-xs font-medium mx-3">Enterprise Solutions</p>
            <div className="h-[2px] w-8 bg-yellow-500"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-4 tracking-tight">
            Industries We Serve
          </h2>
          <div className="h-[2px] w-16 bg-orange-500 mb-6"></div>
          <p className="text-gray-400 text-lg font-medium leading-relaxed">
            Delivering strategic technology solutions across key sectors, enabling enterprise transformation and sustainable competitive advantage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="group cursor-pointer bg-gray-50  border border-zinc-200 border-l-4  hover:border-l-orange-500 transition-all duration-300 ease-in-out"
               data-aos="fade-up" 
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-orange-500 p-2.5 rounded-full bg-orange-200">
                    {industry.icon}
                  </div>
                  <h3 className="text-orange-600 text-lg font-semibold tracking-tight">{industry.title}</h3>
                </div>
                
                <p className="text-gray-400 text-md leading-relaxed mb-5 font-medium">{industry.description}</p>
                
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IndusriesWeServe;