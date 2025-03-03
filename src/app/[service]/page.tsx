import { ArrowRight } from "lucide-react";
import Link from "next/link";

type SubService = {
  title: string;
  description: string;
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
  bposervices: {
    title: "Business Process Outsourcing (BPO)",
    description: "Comprehensive outsourcing solutions to enhance business efficiency and customer experience.",
    subServices: [
      {
        title: "Customer Support & Call Center Services",
        description: "Comprehensive, multichannel customer engagement solutions, including voice, email, chat, and social media support to ensure exceptional customer experiences."
      },
      {
        title: "Back Office & Data Management",
        description: "Efficient handling of data processing, record management, document digitization, and administrative operations to improve business productivity."
      },
      {
        title: "Finance & Accounting Solutions",
        description: "Expert accounting, bookkeeping, accounts payable/receivable, and financial analysis services to streamline financial operations."
      },
      {
        title: "Virtual Assistance",
        description: "Professional support for administrative, creative, and technical tasks, enhancing business efficiency and reducing operational burdens."
      }
    ]
  },

  kposervices: {
    title: "Knowledge Process Outsourcing (KPO)",
    description: "Specialized research, data analytics, and content management solutions to support strategic business decisions.",
    subServices: [
      {
        title: "Market & Business Research",
        description: "In-depth industry research, competitor benchmarking, and market intelligence to support data-driven decision-making."
      },
      {
        title: "Data Analytics & Insights",
        description: "Advanced analytics, predictive modeling, and actionable business intelligence to optimize strategy and performance."
      },
      {
        title: "Content Moderation & Management",
        description: "AI-powered content curation, regulatory compliance, and quality assurance for digital platforms to ensure a safe and engaging user experience."
      }
    ]
  },

  technologysolutions: {
    title: "Technology Solutions",
    description: "Innovative IT and software solutions to drive digital transformation and operational efficiency.",
    subServices: [
      {
        title: "Software Development",
        description: "Custom software, web applications, and mobile app development tailored to meet business needs and drive digital transformation."
      },
      {
        title: "IT Support & Infrastructure Management",
        description: ": End-to-end IT services, including cloud hosting, server management, cybersecurity, and technical support for seamless operations."
      },
      {
        title: "Cloud Computing Solutions",
        description: "Scalable cloud services, migration, and optimization to enhance agility and operational flexibility."
      },
      {
        title: "Cybersecurity & Data Protection",
        description: "Robust security solutions, threat detection, and compliance management to safeguard digital assets and ensure business continuity."
      },
      {
        title: "AI & Automation Services",
        description: "AI-powered automation, machine learning, and robotic process automation (RPA) to drive efficiency and innovation across business functions."
      }
    ]
  },

  automotivetech: {
    title: "Automotive Tech & Support",
    description: "Advanced automotive solutions leveraging AI, IoT, and automation for smart and efficient mobility.",
    subServices: [
      {
        title: "Vehicle Diagnostics & Telematics",
        description: "Advanced diagnostics and real-time telematics solutions to optimize vehicle performance, safety, and predictive maintenance."
      },
      {
        title: "Automotive Software Development",
        description: "Custom-built automotive software solutions for infotainment, in-vehicle systems, and automation technologies."
      },
      {
        title: "IoT & Smart Vehicle Solutions",
        description: "Cutting-edge IoT integration to enable connected, intelligent vehicle solutions with real-time monitoring and data insights."
      },
      {
        title: "Fleet Management & Optimization",
        description: "AI-driven fleet tracking, route optimization, and predictive analytics to enhance fleet efficiency and reduce operational costs."
      },
      {
        title: "EV & Autonomous Vehicle Support",
        description: "Next-generation solutions for electric and self-driving vehicles, supporting automation, battery management, and AI-driven mobility innovations."
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

  const { service } = await params
  console.log(service)

  const serviceInfo = servicesData[params?.service] || {
    title: "Service Not Found",
    description: "The service you are looking for does not exist.",
    subServices: []
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-50"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-amber-400/20 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-16 md:pt-0 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-200 backdrop-blur-sm border border-zinc-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
              <span className="text-sm font-medium text-black">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold  mb-6 leading-tight">
              <span className="text-amber-400">{serviceInfo.title}</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
              {serviceInfo.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="px-6 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-orange-500/20 flex items-center">
                About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

            </div>
          </div>
        </div>
      </section>

      {serviceInfo.subServices.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceInfo.subServices.map((subService, index) => (
            <div
              key={index}
              className="p-8 border border-amber-300 rounded-2xl shadow-md bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <h2 className="text-2xl font-bold text-orange-600 mb-4">
                {subService.title}
              </h2>
              <p className="text-gray-500 leading-loose">
                {subService.description}
              </p>
            </div>
          ))}
        </div>
      )}
    
</>
  );
}
