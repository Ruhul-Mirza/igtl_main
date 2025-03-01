import { Users, Globe, Briefcase, Sparkles } from "lucide-react";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-100 to-blue-100 rounded-full opacity-10 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="h-[1px] w-8 bg-gradient-to-r from-orange-400 to-blue-400"></span>
            <span className="mx-3 text-orange-500 font-medium text-sm uppercase tracking-wider">Our Identity</span>
            <span className="h-[1px] w-8 bg-gradient-to-r from-blue-400 to-orange-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Are</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            A team of industry experts committed to transforming businesses through innovative solutions
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-full opacity-70 z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-70 z-0"></div>
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="IGTL Team" 
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
                
                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      <span className="w-8 h-1 bg-orange-500 mr-3"></span>
                      Our Approach
                    </h3>
                    <p className="text-gray-700">
                      Customer-first solutions that drive sustainable growth and efficiency
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-lg p-4 z-20">
                <div className="w-16 h-16 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-xs font-medium">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50 rounded-bl-full opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-50 rounded-tr-full opacity-70"></div>
              
              {/* Content */}
              <div className="relative">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  At IGTL, we are a team of industry experts committed to transforming businesses through innovative outsourcing and technology solutions. With a customer-first approach, we provide customized, high-quality services that enhance efficiency, reduce costs, and drive sustainable growth.
                </p>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
                  Our global expertise enables us to cater to diverse industries, ensuring reliability, scalability, and excellence in every project we undertake.
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Feature 1 */}
                  <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border border-orange-100 hover:shadow-md transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                      <Users className="text-white h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
                    <p className="text-gray-600">
                      Industry professionals with specialized knowledge and experience
                    </p>
                  </div>
                  
                  {/* Feature 2 */}
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                      <Globe className="text-white h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Reach</h3>
                    <p className="text-gray-600">
                      Serving diverse industries worldwide with localized expertise
                    </p>
                  </div>
                  
                  {/* Feature 3 */}
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                      <Briefcase className="text-white h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Focus</h3>
                    <p className="text-gray-600">
                      Tailored approaches that address your specific business needs
                    </p>
                  </div>
                  
                  {/* Feature 4 */}
                  <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-sm border border-orange-100 hover:shadow-md transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                      <Sparkles className="text-white h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                    <p className="text-gray-600">
                      Cutting-edge solutions that drive transformation and growth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}