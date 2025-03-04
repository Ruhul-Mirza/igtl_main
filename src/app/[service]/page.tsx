import React from 'react';

import {
  ArrowRight,
  Headphones,
  Database,
  FileText,
  User,
  Briefcase,
  BarChart,
  ShieldCheck,
  Code,
  Cloud,
  Lock,
  Settings,
  Car,
  Cpu,
  Globe,
  MapPin,
  BatteryCharging
} from "lucide-react";
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
  "bpo-services": {
    title: "Business Process Outsourcing",
    description: "Comprehensive outsourcing solutions to enhance business efficiency and customer experience.",
    subServices: [
      {
        title: "Customer Support & Call Center Services",
        description: "Comprehensive, multichannel customer engagement solutions, including voice, email, chat, and social media support to ensure exceptional customer experiences.",
        icon: <Headphones className="w-10 h-10 text-amber-500" />
      },
      {
        title: "Back Office & Data Management",
        description: "Efficient handling of data processing, record management, document digitization, and administrative operations to improve business productivity.",
        icon: <Database className="w-10 h-10 text-amber-500" />
      },
      {
        title: "Finance & Accounting Solutions",
        description: "Expert accounting, bookkeeping, accounts payable/receivable, and financial analysis services to streamline financial operations.",
        icon: <FileText className="w-10 h-10 text-amber-500" />
      },
      {
        title: "Virtual Assistance",
        description: "Professional support for administrative, creative, and technical tasks, enhancing business efficiency and reducing operational burdens.",
        icon: <User className="w-10 h-10 text-amber-500" />
      }
    ]
  },

  "kpo-services": {
    title: "Knowledge Process Outsourcing",
    description: "Specialized research, data analytics, and content management solutions to support strategic business decisions.",
    subServices: [
      {
        title: "Market & Business Research",
        description: "In-depth industry research, competitor benchmarking, and market intelligence to support data-driven decision-making.",
        icon: <Briefcase className="w-10 h-10 text-amber-500" />
      },
      {
        title: "Data Analytics & Insights",
        description: "Advanced analytics, predictive modeling, and actionable business intelligence to optimize strategy and performance.",
        icon: <BarChart className="w-10 h-10 text-amber-500" />
      },
      {
        title: "Content Moderation & Management",
        description: "AI-powered content curation, regulatory compliance, and quality assurance for digital platforms to ensure a safe and engaging user experience.",
        icon: <ShieldCheck className="w-10 h-10 text-amber-500" />
      }
    ]
  },

  "tech-solutions": {
    title: "Technology Solutions",
    description: "Innovative IT and software solutions to drive digital transformation and operational efficiency.",
    subServices: [
      {
        title: "Software Development",
        description: "Custom software, web applications, and mobile app development tailored to meet business needs and drive digital transformation.",
        icon: <Code className="w-10 h-10 text-amber-500" />
      },
      {
        title: "IT Support & Infrastructure Management",
        description: "End-to-end IT services, including cloud hosting, server management, cybersecurity, and technical support for seamless operations.",
        icon: <Cloud className="w-10 h-10 text-amber-500" />
      },
      {
        title: "Cloud Computing Solutions",
        description: "Scalable cloud services, migration, and optimization to enhance agility and operational flexibility.",
        icon: <Cloud className="w-10 h-10 text-amber-500" />
      },
      {
        title: "Cybersecurity & Data Protection",
        description: "Robust security solutions, threat detection, and compliance management to safeguard digital assets and ensure business continuity.",
        icon: <Lock className="w-10 h-10 text-amber-500" />
      },
      {
        title: "AI & Automation Services",
        description: "AI-powered automation, machine learning, and robotic process automation (RPA) to drive efficiency and innovation across business functions.",
        icon: <Settings className="w-10 h-10 text-amber-500" />
      }
    ]
  },

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
type ServicePageProps = {
  params: {
    service: string;
  };
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { service } = params;

  const serviceInfo = servicesData[service] || {
    title: "Service Not Found",
    description: "The service you are looking for does not exist.",
    subServices: []
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-gray-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-20 md:py-32">
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
      {serviceInfo.subServices.length > 0 && (
        <section className="pb-8 pt-16 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Specialized Solutions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our comprehensive range of services designed to meet your specific business needs and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceInfo.subServices.map((subService, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 ease-in-out border border-gray-100 hover:border-amber-200"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="p-6 sm:p-8">
                    <div className="mb-5 p-3 bg-amber-50 rounded-xl inline-block">
                      {subService.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                      {subService.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{subService.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>

  );
}

