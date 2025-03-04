'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '../app/lib/utils';
import Image from 'next/image';
import Logo from "../../public/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-screen right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <Image src={Logo} width={100} alt='Igtl Logo'></Image>

            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-3">
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-orange-500 px-3 py-2 text-base font-medium transition-all duration-200 rounded-md hover:bg-orange-50 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center text-gray-700 cursor-pointer hover:text-orange-500 px-3 py-2 text-base font-medium transition-all duration-200 rounded-md hover:bg-orange-50 relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform duration-200", isServicesOpen ? "rotate-180" : "")} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={cn(
                    "absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white transition-all duration-300 ease-in-out transform origin-top-left",
                    isServicesOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  )}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-1 divide-y divide-gray-100">
                    <div className="px-4 py-3">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Professional Services</p>
                    </div>
                    <div className="py-1">
                      <Link href="/bpo-services" className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                        <div className="w-2 h-2 rounded-full bg-orange-400 mr-3 transform transition-all duration-300 group-hover:scale-150 group-hover:bg-orange-500"></div>
                        <div>
                          <p className="font-medium">Bpo Services</p>
                          
                        </div>
                      </Link>
                      <Link href="/kpo-services" className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                        <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3 transform transition-all duration-300 group-hover:scale-150 group-hover:bg-yellow-500"></div>
                        <div>
                          <p className="font-medium">Kpo Services</p>
                          
                        </div>
                      </Link>
                      <Link href="/tech-solutions" className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                        <div className="w-2 h-2 rounded-full bg-orange-300 mr-3 transform transition-all duration-300 group-hover:scale-150 group-hover:bg-orange-400"></div>
                        <div>
                          <p className="font-medium">Technology & Solutions</p>
                          
                        </div>
                      </Link>
                      <Link href="/auto-tech" className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                        <div className="w-2 h-2 rounded-full bg-yellow-300 mr-3 transform transition-all duration-300 group-hover:scale-150 group-hover:bg-orange-400"></div>
                        <div>
                          <p className="font-medium">Automotive Tech & Support</p>
                          
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-orange-500 px-3 py-2 text-base font-medium transition-all duration-200 rounded-md hover:bg-orange-50 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          {/* Right side - Career button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/careers" 
              className="px-6 py-2 overflow-hidden font-medium text-orange-600 transition duration-300 ease-out border-2 border-orange-500 rounded-md shadow-md hover:bg-orange-500 hover:text-white"
            >
              <span>Careers</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

{/* Mobile menu, show/hide based on menu state */}
<div className={cn("md:hidden transition-all bg-white duration-300 ease-in-out", isOpen ? "max-h-96" : "max-h-0 overflow-hidden")}>
  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
    <Link 
      href="/about" 
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-300"
      onClick={() => setIsOpen(false)}
    >
      About
    </Link>
    
    {/* Mobile Services Dropdown */}
    <button
      className="flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-300"
      onClick={() => setIsServicesOpen(!isServicesOpen)}
    >
      Services
      <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform duration-200", isServicesOpen ? "rotate-180" : "")} />
    </button>
    
    {/* Mobile Services Submenu */}
    <div className={cn("pl-4 space-y-1 transition-all duration-300", isServicesOpen ? "block" : "hidden")}>
      <Link 
        href="/bpo-services" 
        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-white hover:bg-orange-500 transition-colors duration-300"
        onClick={() => setIsOpen(false)}
      >
        Bpo Services
      </Link>
      <Link 
        href="/kpo-services" 
        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-white hover:bg-orange-500 transition-colors duration-300"
        onClick={() => setIsOpen(false)}
      >
        Kpo Services
      </Link>
      <Link 
        href="/tech-solutions" 
        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-white hover:bg-orange-500 transition-colors duration-300"
        onClick={() => setIsOpen(false)}
      >
        Technology & Solutions
      </Link>
      <Link 
        href="/auto-tech" 
        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-white hover:bg-orange-500 transition-colors duration-300"
        onClick={() => setIsOpen(false)}
      >
        Automotive Tech & Support
      </Link>
    </div>
    
    <Link 
      href="/contact" 
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-300"
      onClick={() => setIsOpen(false)}
    >
      Contact
    </Link>
    
    <Link 
      href="/careers" 
      className="block px-3 py-2 rounded-md text-base text-center font-medium text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 shadow-md transition-all duration-300"
      onClick={() => setIsOpen(false)}
    >
      Careers
    </Link>
  </div>
</div>

    </nav>
  );
}