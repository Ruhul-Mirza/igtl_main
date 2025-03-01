export default function VisionMission() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Vision Card */}
        <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden group transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500 opacity-10 rounded-bl-full transform translate-x-6 -translate-y-6"></div>
          <div className="p-10">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                <span className="text-orange-600 font-bold text-lg">01</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To be a global leader in BPO, KPO, and technology solutions,
              redefining business efficiency through cutting-edge innovation,
              operational excellence, and an unwavering commitment to client
              success.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden group transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500 opacity-10 rounded-bl-full transform translate-x-6 -translate-y-6"></div>
          <div className="p-10">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                <span className="text-orange-600 font-bold text-lg">02</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To empower businesses with high-quality, technology-driven
              outsourcing solutions that enhance productivity, drive growth, and
              create long-term value for our clients, employees, and
              stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
