import React from 'react';
import { ArrowRight, Lightbulb, DollarSign, Clock, LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import WhyChooseImage from "../../public/Choose-amico.png"
import Link from 'next/link';

function WhyChooseUs() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8" data-aos="fade-up" >
            <div className="container mx-auto max-w-7xl w-full p-6 md:p-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mb-10 md:mb-20 text-center lg:text-left">
                    Why Choose Us?
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 md:mb-12">
                    <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                        <div className="flex flex-col sm:flex-row items-start sm:space-x-4">
                            <div className="bg-indigo-100 p-3 rounded-full mb-3 sm:mb-0 flex-shrink-0">
                                <Lightbulb className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-base md:text-lg text-indigo-600 mb-1 md:mb-2">Industry Expertise & Innovation</h3>
                                <p className="text-gray-600 font-medium">Our team combines deep domain expertise with the latest technological advancements to deliver top-tier solutions.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:space-x-4">
                            <div className="bg-emerald-100 p-3 rounded-full mb-3 sm:mb-0 flex-shrink-0">
                                <DollarSign className="h-6 w-6 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-base md:text-lg text-emerald-600 mb-1 md:mb-2">Cost-Effective Solutions</h3>
                                <p className="text-gray-600 font-medium">Reduce operational costs while maintaining high-quality service standards and efficiency.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:space-x-4">
                            <div className="bg-amber-100 p-3 rounded-full mb-3 sm:mb-0 flex-shrink-0">
                                <Clock className="h-6 w-6 text-amber-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-base md:text-lg text-amber-600 mb-1 md:mb-2">24/7 Global Support</h3>
                                <p className="text-gray-600 font-medium">Our dedicated team provides round-the-clock assistance to ensure seamless business continuity.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:space-x-4">
                            <div className="bg-rose-100 p-3 rounded-full mb-3 sm:mb-0 flex-shrink-0">
                                <LayoutGrid className="h-6 w-6 text-rose-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-base md:text-lg text-rose-600 mb-1 md:mb-2">Customized & Scalable Services</h3>
                                <p className="text-gray-600 font-medium">We tailor solutions to meet specific business needs and scale with organizational growth.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
                        <Image
                            src={WhyChooseImage}
                            alt="Why Choose Us"
                            className="w-full max-w-sm lg:max-w-md h-auto object-cover"
                        />
                    </div>
                </div>

                <div className="flex justify-center lg:justify-start">
                    <Link href="/about">
                        <button className="bg-orange-400 cursor-pointer hover:bg-orange-500 text-white font-medium py-3 px-6 md:px-8 rounded-full flex items-center transition-colors duration-300 shadow-md hover:shadow-lg">
                            Know More
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;