export default function VisionMission() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Vision Card */}
        <div
          className="relative bg-white rounded-2xl shadow-sm overflow-hidden group transition-all duration-300"
          data-aos="fade-right"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500 opacity-10 rounded-bl-full transform translate-x-6 -translate-y-6"></div>
          <div className="p-10">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                <span className="text-orange-600 font-bold text-lg">01</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              To be a globally respected leader in business transformation, delivering superior value through innovation, integrity, and customer-centric solutions.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We envision a world where businesses of all sizes can leverage intelligent outsourcing and advanced technologies to operate with greater precision, agility, and impact. Through continuous learning, disruptive thinking, and collaborative execution, IGTL strives to lead the way in transforming industries, empowering people, and enabling a digitally inclusive future.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div
          className="relative bg-white rounded-2xl shadow-sm overflow-hidden group transition-all duration-300 w-full"
          data-aos="fade-left"
        >
          {/* Top bar & shape */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
          <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-orange-500 opacity-10 rounded-bl-full transform translate-x-4 -translate-y-4 sm:translate-x-6 sm:-translate-y-6"></div>

          {/* Card Content */}
          <div className="p-5 sm:p-6 md:p-8 lg:p-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start mb-6 gap-3 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                <span className="text-orange-600 font-bold text-base sm:text-lg">02</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>

            {/* Main Paragraph */}
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg mb-4">
              To deliver high-quality, technology-enabled outsourcing and innovation services that empower clients to exceed their business goals.
            </p>

            {/* List Items */}
            <ul className="list-disc list-outside pl-6 text-orange-500 text-sm sm:text-base md:text-lg font-medium space-y-2 mb-4">
              <li className="leading-relaxed">Best-in-class processes and domain expertise</li>
              <li className="leading-relaxed">Secure and scalable digital ecosystems</li>
              <li className="leading-relaxed">Customer-first service delivery</li>
              <li className="leading-relaxed">A highly skilled and engaged global workforce</li>
            </ul>
            {/* Ending Paragraph */}
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
              Our mission extends beyond business—to empower our employees, enrich communities, and make a positive impact on society through inclusive growth, responsible governance, and sustainability practices.
            </p>
          </div>
        </div>

      </div>
    </section>

  );
}
