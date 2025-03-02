import { Award, BarChart, Target } from "lucide-react";
export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-orange-100">
        <div className="p-8 md:p-12">
          <div className="flex items-center mb-8">
            <div className="h-1 w-12 bg-orange-500 mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            At IGTL, we are dedicated to providing seamless, end-to-end
            outsourcing and technology services that empower businesses. With
            years of experience and a deep understanding of industry dynamics,
            we offer tailored solutions that optimize processes, maximize
            efficiency, and deliver superior business outcomes. Our mission is
            to enable organizations to stay ahead in an ever-evolving digital
            landscape through strategic innovation and exceptional service.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            <div className="group bg-white p-6 md:p-8 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-5 md:mb-6 transform group-hover:rotate-3 transition-transform duration-300">
                <Target className="text-white h-7 w-7 md:h-8 md:w-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                Expertise
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Years of industry experience delivering tailored solutions
                across sectors
              </p>
            </div>

            <div className="group bg-white p-6 md:p-8 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-5 md:mb-6 transform group-hover:rotate-3 transition-transform duration-300">
                <BarChart className="text-white h-7 w-7 md:h-8 md:w-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                Innovation
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Cutting-edge technology solutions that drive business
                transformation
              </p>
            </div>

            <div className="group bg-white p-6 md:p-8 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-5 md:mb-6 transform group-hover:rotate-3 transition-transform duration-300">
                <Award className="text-white h-7 w-7 md:h-8 md:w-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                Excellence
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Commitment to quality and exceptional service delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
