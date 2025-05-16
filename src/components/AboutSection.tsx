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
          <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-4xl">
            At IGTL, we specialize in delivering end-to-end Business Process Outsourcing (BPO), Knowledge Process Outsourcing (KPO), and next-generation Technology Services that help organizations future-proof their operations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-4xl">
            Our success is rooted in:
          </p>
          <ul className="space-y-3 mb-6 max-w-4xl">
            {[
              "A consultative approach that prioritizes understanding your unique business landscape.",
              "A solution-first mindset focused on driving measurable performance.",
              "A partnership philosophy that emphasizes transparency, trust, and shared growth.",
            ].map((item, index) => (
              <li key={index} className="relative pl-6 text-orange-600 text-base md:text-lg font-medium leading-relaxed">
                <span className="absolute left-0 top-2 w-2.5 h-2.5 bg-orange-500 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            With years of cross-industry experience, we support a wide range of business functions—from customer service and back-office management to analytics, AI automation, software development, and digital infrastructure management. Our mission is to be the go-to partner for organizations seeking transformation that’s not only digital—but also human, agile, and impactful.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            <div className="group bg-white p-6 md:p-8 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" data-aos="fade-up">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-5 md:mb-6 transform group-hover:rotate-3 transition-transform duration-300">
                <Target className="text-white h-7 w-7 md:h-8 md:w-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                Expertise
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Years of industry experience delivering tailored solutions across sectors
              </p>
            </div>

            <div className="group bg-white p-6 md:p-8 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" data-aos="fade-up">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-5 md:mb-6 transform group-hover:rotate-3 transition-transform duration-300">
                <BarChart className="text-white h-7 w-7 md:h-8 md:w-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                Innovation
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Cutting-edge technology solutions that drive business transformation
              </p>
            </div>

            <div className="group bg-white p-6 md:p-8 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1" data-aos="fade-up">
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
