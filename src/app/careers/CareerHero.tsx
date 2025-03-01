import Image from "next/image"

import careerHero from "../../../public/Hiring-cuate.png"
import Link from "next/link"
import { ArrowRight, TrendingUp, Activity, Lightbulb } from "lucide-react"
export default function CareerHero() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="relative pt-20 overflow-hidden">

                <div className="max-w-screen-xl px-6 py-16 mx-auto lg:py-24 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 items-center gap-12">
                        <div className="lg:col-span-7 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start mb-6">
                                <div className="h-1 w-12 bg-orange-500 mr-3"></div>
                                <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">Careers</span>
                            </div>
                            <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
                                Join Our Team At <br /> <span className="text-orange-500">IGTL</span>
                            </h1>
                            <p className="max-w-2xl mb-8 text-gray-600 lg:mb-10 text-base sm:text-lg">
                                We are always on the lookout for talented professionals who are passionate about making a difference in the outsourcing and technology industry. Whether you are an experienced professional or a fresh graduate, we offer exciting career opportunities, professional development, and a collaborative work environment that fosters innovation and success.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-10">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-blue-100 rounded-full">
                                        <Activity className="w-5 h-5 text-blue-800" />
                                    </div>
                                    <span className="font-medium">Dynamic</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-orange-100 rounded-full">
                                        <Lightbulb className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <span className="font-medium">Innovative</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-green-100 rounded-full">
                                        <TrendingUp className="w-5 h-5 text-green-600" />
                                    </div>
                                    <span className="font-medium">Growth</span>
                                </div>
                            </div>
                            <div className="flex justify-center md:justify-start gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-orange-500 px-6 py-3 text-base font-medium text-white rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-sm hover:shadow-md gap-2 group"
                                >
                                    Get started
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-5 flex justify-center mt-10 lg:mt-0">
                            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                                <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-500/10 rounded-full blur-xl"></div>
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
                                <Image src={careerHero} alt="Career Image" className="w-full h-auto rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}