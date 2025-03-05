import React from 'react';

import { Briefcase, Clock, Star } from 'lucide-react';
import Link from 'next/link';

function JobOpenings() {
  const jobCards = [
    {
      title: "Customer Success Associate",
      experience: "0-5 years",
      work: "Onsite"
    }, 
    {
      title: "Data Engineer",
      experience: "3+ years",
      work: "Onsite/Hybrid"
    }, 
    {
      title: "Data Engineering Manager",
      experience: "8+ years",
      work: "Onsite/Hybrid"
    }, 
    {
      title: "Full Stack Developer",
      experience: "5+ years",
      work: "Onsite/Hybrid"
    }, 
    {
      title: "QA Engineer",
      experience: "2+ years",
      work: "Onsite/Hybrid"
    }, 
    {
      title: "Data Platform Engineer",
      experience: "5+ years",
      work: "Onsite/Hybrid"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 pb-2">
            Current Openings
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest job opportunities and take the next step in your career with <span className="font-bold">IGTL</span>
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobCards.map((jobCard, index) => (
            <div 
              key={index} 
              data-aos="fade-down"
              className="bg-white rounded-xl  overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800">{jobCard.title}</h2>
                  <div className="bg-amber-50 p-1.5 rounded-full">
                    <Star size={18} className="text-amber-500" />
                  </div>
                </div>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2.5 text-orange-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{jobCard.experience} experience</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Briefcase size={16} className="mr-2.5 text-orange-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{jobCard.work}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100 mt-auto">
                    <Link href="/contact">
                    
                  <button className="w-full cursor-pointer opacity-100 hover:opacity-80 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-medium px-4 py-3 rounded-lg text-sm shadow-sm">
                    Apply Now
                  </button>
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobOpenings;