export default function AboutHero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-50 opacity-70"></div>

      <div className="absolute left-0 bottom-0 w-64 h-64 bg-gradient-to-tr from-orange-200 to-transparent rounded-tr-full opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-block mb-4">
            <div className="flex items-center">
              <div className="h-0.5 w-8 bg-orange-400"></div>
              <span className="mx-3 text-orange-500 font-medium">About Us</span>
              <div className="h-0.5 w-8 bg-orange-400"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            About <span className="text-orange-500">IGTL</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-2xl">
            Empowering businesses through innovation and excellence
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-orange-50"></div>
    </div>
  );
}
