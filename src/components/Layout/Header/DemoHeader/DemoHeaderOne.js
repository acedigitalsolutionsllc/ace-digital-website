import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function DemoHeaderOne() {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY >= 76) {
          headerRef.current.classList.remove("h1-header-sticky-qs");
        } else {
          headerRef.current.classList.add("h1-header-sticky-qs");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div
        ref={headerRef}
        className="fixed top-0 left-0 z-40 hidden w-full header-wrapper xl:block h1-header-sticky h1-header-sticky-qs"
      >
        <div className="2xl:px-[110px] px-5 mx-auto relative mt-4">
          <div className="w-full h-[95px] flex justify-between items-center px-[50px] border border-[#e7e8e9] bg-white rounded-[20px] shadow-sm relative">
            
            <div className="flex 2xl:space-x-[100px] xl:space-x-10 justify-between items-center w-full xl:w-auto">
              
              {/* 1. Logo Area (Made Larger) */}
              <div>
                <Link to="/" aria-label="logo">
                  <img 
                    src="/assets/images/ace-logo.png" 
                    alt="ACE Digital Solutions" 
                    className="h-16 w-auto object-contain" 
                  />
                </Link>
              </div>

              {/* 2. Navigation Menu */}
              <div>
                <ul className="flex items-center space-x-10">
                  <li className="font-semibold text-paragraph hover:underline hover:text-purple transition-all duration-300">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="font-semibold text-paragraph hover:underline hover:text-purple transition-all duration-300">
                    <Link to="/about">Founder</Link>
                  </li>
                  <li className="font-semibold text-paragraph hover:underline hover:text-purple transition-all duration-300">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="font-semibold text-paragraph hover:underline hover:text-purple transition-all duration-300">
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li className="font-semibold text-paragraph hover:underline hover:text-purple transition-all duration-300">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Action Buttons */}
            <div className="xl:flex hidden space-x-[30px] items-center">
              
              {/* Client Login Link */}
              <a href="#">
                <div className="flex space-x-1.5 items-center hover:text-purple transition-all duration-300">
                  <span className="font-semibold text-main-black">Client Login</span>
                </div>
              </a>

              {/* Start Scaling Button (Hover Fixed) */}
              <Link to="/contact">
                <div className="py-3 px-8 bg-purple rounded-full cursor-pointer hover:bg-main-black transition-all duration-300 flex items-center gap-2 group">
                  <span className="relative z-10 text-base font-semibold text-white font-inter">
                    Start Scaling
                  </span>
                  <svg
                    className="relative z-10 transform group-hover:translate-x-1 transition-all duration-300"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}