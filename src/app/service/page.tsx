// import React from 'react';
// import { 
//   Briefcase, 
//   Brain, 
//   Code, 
//   Car, 
//   Phone, 
//   FileText, 
//   Calculator, 
//   UserCheck, 
//   LineChart, 
//   BarChart3, 
//   Shield, 
//   Database, 
//   Cloud, 
//   Lock, 
//   Bot, 
//   Gauge, 
//   Laptop, 
//   Wifi, 
//   Truck, 
//   Zap 
// } from 'lucide-react';

// interface SubService {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
// }

// interface ServiceData {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   subServices: SubService[];
// }

// const servicesData: Record<string, ServiceData> = {
//   bposervices: {
//     title: "Business Process Outsourcing (BPO)",
//     description: "Comprehensive outsourcing solutions to enhance business efficiency and customer experience.",
//     icon: <Briefcase size={32} />,
//     subServices: [
//       {
//         title: "Customer Support & Call Center Services",
//         description: "Multichannel customer engagement via voice, email, chat, and social media to ensure exceptional experiences.",
//         icon: <Phone size={24} />
//       },
//       {
//         title: "Back Office & Data Management",
//         description: "Efficient data processing, record management, document digitization, and administrative operations.",
//         icon: <FileText size={24} />
//       },
//       {
//         title: "Finance & Accounting Solutions",
//         description: "Expert bookkeeping, accounts payable/receivable, and financial analysis to streamline operations.",
//         icon: <Calculator size={24} />
//       },
//       {
//         title: "Virtual Assistance",
//         description: "Administrative, creative, and technical support to improve business efficiency and reduce workload.",
//         icon: <UserCheck size={24} />
//       }
//     ]
//   },
  
//   kposervices: {
//     title: "Knowledge Process Outsourcing (KPO)",
//     description: "Specialized research, data analytics, and content management solutions to support strategic business decisions.",
//     icon: <Brain size={32} />,
//     subServices: [
//       {
//         title: "Market & Business Research",
//         description: "Industry research, competitor benchmarking, and market intelligence for data-driven decision-making.",
//         icon: <LineChart size={24} />
//       },
//       {
//         title: "Data Analytics & Insights",
//         description: "Predictive modeling, business intelligence, and performance optimization through data analytics.",
//         icon: <BarChart3 size={24} />
//       },
//       {
//         title: "Content Moderation & Management",
//         description: "AI-powered content curation, compliance management, and quality assurance for digital platforms.",
//         icon: <Shield size={24} />
//       }
//     ]
//   },

//   technologysolutions: {
//     title: "Technology Solutions",
//     description: "Innovative IT and software solutions to drive digital transformation and operational efficiency.",
//     icon: <Code size={32} />,
//     subServices: [
//       {
//         title: "Software Development",
//         description: "Custom-built web, mobile, and enterprise software solutions tailored to business needs.",
//         icon: <Laptop size={24} />
//       },
//       {
//         title: "IT Support & Infrastructure Management",
//         description: "Comprehensive IT services, including cloud hosting, server management, and cybersecurity.",
//         icon: <Database size={24} />
//       },
//       {
//         title: "Cloud Computing Solutions",
//         description: "Scalable cloud services, migration, and optimization for enhanced agility and flexibility.",
//         icon: <Cloud size={24} />
//       },
//       {
//         title: "Cybersecurity & Data Protection",
//         description: "Robust security solutions, threat detection, and compliance management to safeguard digital assets.",
//         icon: <Lock size={24} />
//       },
//       {
//         title: "AI & Automation Services",
//         description: "AI-powered automation, machine learning, and robotic process automation (RPA) for efficiency and innovation.",
//         icon: <Bot size={24} />
//       }
//     ]
//   },

//   automotivetech: {
//     title: "Automotive Tech & Support",
//     description: "Advanced automotive solutions leveraging AI, IoT, and automation for smart and efficient mobility.",
//     icon: <Car size={32} />,
//     subServices: [
//       {
//         title: "Vehicle Diagnostics & Telematics",
//         description: "Real-time diagnostics and telematics solutions to optimize vehicle performance and maintenance.",
//         icon: <Gauge size={24} />
//       },
//       {
//         title: "Automotive Software Development",
//         description: "Custom automotive software for infotainment, in-vehicle systems, and automation technologies.",
//         icon: <Code size={24} />
//       },
//       {
//         title: "IoT & Smart Vehicle Solutions",
//         description: "IoT integration for connected, intelligent vehicle solutions with real-time monitoring.",
//         icon: <Wifi size={24} />
//       },
//       {
//         title: "Fleet Management & Optimization",
//         description: "AI-driven fleet tracking, route optimization, and predictive analytics for efficiency and cost savings.",
//         icon: <Truck size={24} />
//       },
//       {
//         title: "EV & Autonomous Vehicle Support",
//         description: "Advanced solutions for electric and self-driving vehicles, including battery management and AI-driven automation.",
//         icon: <Zap size={24} />
//       }
//     ]
//   }
// };

// type ServicePageProps = {
//   params: {
//     service: string;
//   };
// };

// function ServicePage({ params }: ServicePageProps) {
//   const serviceKey = params.service || 'bpo'; // Default to BPO if no service is specified
//   const serviceInfo = servicesData[serviceKey] || {
//     title: "Service Not Found",
//     description: "The service you are looking for does not exist.",
//     icon: <Briefcase size={32} />,
//     subServices: []
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
//       <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
//         {/* Hero Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white mb-6 shadow-lg">
//             {serviceInfo.icon}
//           </div>
//           <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
//               {serviceInfo.title}
//             </span>
//           </h1>
//           <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
//             {serviceInfo.description}
//           </p>
//         </div>

//         {/* Service Navigation */}
//         <div className="flex flex-wrap justify-center gap-4 mb-16">
//           {Object.keys(servicesData).map((key) => (
//             <button 
//               key={key}
//               className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md
//                 ${serviceKey === key 
//                   ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' 
//                   : 'bg-white text-gray-700 hover:bg-orange-100'}`}
//               onClick={() => {
//                 // This would be a navigation function in a real app
//                 console.log(`Navigate to ${key}`);
//               }}
//             >
//               {servicesData[key].title.split('(')[0].trim()}
//             </button>
//           ))}
//         </div>

//         {/* Sub-services Section */}
//         {serviceInfo.subServices.length > 0 && (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {serviceInfo.subServices.map((subService, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
//               >
//                 <div className="h-2 bg-gradient-to-r from-amber-400 to-orange-500"></div>
//                 <div className="p-8">
//                   <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
//                     {subService.icon}
//                   </div>
//                   <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
//                     {subService.title}
//                   </h2>
//                   <p className="text-gray-600">
//                     {subService.description}
//                   </p>
//                 </div>
//                 <div className="px-8 pb-6">
//                   <button className="text-orange-500 font-medium flex items-center hover:text-orange-700 transition-colors duration-300">
//                     Learn more
//                     <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }
export default function ServicePage(){
    return(
        <div>RNuuhufdfu</div>
    )
}