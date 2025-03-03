import React from "react";
import logo from "../../../public/Logo.png"
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 pb-4 border-b border-zinc-300 lg:grid-cols-2 gap-8 lg:gap-28">
          {/* Logo and Description */}
          <div className="flex flex-col">
            <div className="text-teal-600 ">
              <Image src={logo} alt="Apeiro Logo" className="w-40" />
              
            </div>
            <p className="mt-4 text-left text-black font-semibold">
            Infiglobal Techlogix Pvt Ltd
            </p>
            {/* Social Icons */}
            {/* <ul className="mt-6 flex space-x-2">
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <radialGradient
                      id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                      cx="19.38"
                      cy="42.035"
                      r="44.899"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#fd5"></stop>
                      <stop offset=".328" stopColor="#ff543f"></stop>
                      <stop offset=".348" stopColor="#fc5245"></stop>
                      <stop offset=".504" stopColor="#e64771"></stop>
                      <stop offset=".643" stopColor="#d53e91"></stop>
                      <stop offset=".761" stopColor="#cc39a4"></stop>
                      <stop offset=".841" stopColor="#c837ab"></stop>
                    </radialGradient>
                    <path
                      fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                    ></path>
                    <radialGradient
                      id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                      cx="11.786"
                      cy="5.54"
                      r="29.813"
                      gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#4168c9"></stop>
                      <stop
                        offset=".999"
                        stopColor="#4168c9"
                        stopOpacity="0"
                      ></stop>
                    </radialGradient>
                    <path
                      fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                    ></path>
                    <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                    <path
                      fill="#fff"
                      d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">FaceBook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <linearGradient
                      id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1"
                      x1="6.228"
                      x2="42.077"
                      y1="4.896"
                      y2="43.432"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#0d61a9"></stop>
                      <stop offset="1" stopColor="#16528c"></stop>
                    </linearGradient>
                    <path
                      fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)"
                      d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"
                    ></path>
                    <path
                      d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z"
                      opacity=".05"
                    ></path>
                    <path
                      d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z"
                      opacity=".07"
                    ></path>
                    <path
                      fill="#fff"
                      d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul> */}
          </div>

          {/* Services Section */}
          <div className="flex flex-col justify-start gap-6 sm:gap-4 sm:flex-row lg:justify-end sm:space-x-20">
            <div>
              <p className="font-bold text-black border-b-2 border-orange-400 inline-block pb-1">
                Services
              </p>
              <ul className="mt-4 space-y-3 text-sm font-medium">
                <li>
                  <Link
                    href="/kposervices"
                    className="text-black transition hover:underline hover:text-orange-400"
                  >
                    Kpo Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bposervices"
                    className="text-black transition hover:underline hover:text-orange-400"
                  >
                    Bpo Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technologysolutions"
                    className="text-black transition hover:underline hover:text-orange-400"
                  >
                    Technology & Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/automotivetech"
                    className="text-black transition hover:underline hover:text-orange-400"
                  >
                    Automotive Tech & Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pr-6">
              <p className="font-bold text-black border-b-2 border-orange-400 inline-block pb-1">
                Navigation
              </p>

              <ul className="mt-4 space-y-3 font-medium text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-black transition hover:underline hover:text-orange-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-black transition hover:underline hover:text-orange-400"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-black transition hover:underline hover:text-orange-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <p className="mt-4 text-center text-xs text-gray-700">
          <span>
            &copy; 2025. Infiglobal Techlogix Pvt Ltd . All rights reserved.{" "}
            <Link href="/privacy-policy" className="text-blue-700 hover:text-orange-400 underline">
              Privacy Policy
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;