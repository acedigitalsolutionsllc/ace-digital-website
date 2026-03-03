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
              
              {/* 1. Logo Area */}
              <div>
                <Link to="/" aria-label="logo">
                  <img 
                    src="/assets/images/ace-logo.svg" 
                    alt="ACE Digital Solutions" 
                    className="h-[150px] w-auto object-contain" 
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
                    <Link to="/about">About Us</Link>
                  </li>

                  {/* --- Our Works Dropdown Menu --- */}
                  <li className="relative group font-semibold text-paragraph transition-all duration-300 cursor-pointer h-[95px] flex items-center">
                    <div className="flex items-center gap-1 hover:text-purple">
                      Our Works
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="mt-0.5 group-hover:rotate-180 transition-transform duration-300"><path d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    
                    <ul className="absolute top-[80px] left-0 w-[260px] bg-white border border-[#e7e3fa] rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col py-3">
                      <li className="hover:bg-purple/10 px-5 py-2.5 transition-colors">
                        <Link to="/" state={{ category: "AI Digital Twins & Spokespersons" }} className="block w-full text-main-black hover:text-purple text-sm">AI Digital Twins & Spokespersons</Link>
                      </li>
                      <li className="hover:bg-purple/10 px-5 py-2.5 transition-colors">
                        <Link to="/" state={{ category: "Shorts/Reels" }} className="block w-full text-main-black hover:text-purple text-sm">Shorts/Reels</Link>
                      </li>
                      <li className="hover:bg-purple/10 px-5 py-2.5 transition-colors">
                        <Link to="/" state={{ category: "Promo Video" }} className="block w-full text-main-black hover:text-purple text-sm">Promo Video</Link>
                      </li>
                      <li className="hover:bg-purple/10 px-5 py-2.5 transition-colors">
                        <Link to="/" state={{ category: "Banner Ads" }} className="block w-full text-main-black hover:text-purple text-sm">Banner Ads</Link>
                      </li>
                      <li className="hover:bg-purple/10 px-5 py-2.5 transition-colors">
                        <Link to="/" state={{ category: "CGI Advertising" }} className="block w-full text-main-black hover:text-purple text-sm">CGI Advertising</Link>
                      </li>
                      <li className="hover:bg-purple/10 px-5 py-2.5 transition-colors">
                        <Link to="/" state={{ category: "Thumbnail" }} className="block w-full text-main-black hover:text-purple text-sm">Thumbnail</Link>
                      </li>
                      <li className="hover:bg-purple/10 px-5 py-2.5 transition-colors border-t border-[#e7e3fa] mt-1 pt-2">
                        <Link to="/" state={{ category: "All" }} className="block w-full text-purple font-bold text-sm">View All Projects</Link>
                      </li>
                    </ul>
                  </li>
                  {/* --- End Our Works Dropdown --- */}

                  {/* --- Services MEGA MENU (New) --- */}
                  <li className="relative group font-semibold text-paragraph transition-all duration-300 h-[95px] flex items-center">
                    <div className="flex items-center gap-1 hover:text-purple cursor-pointer">
                      Services
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="mt-0.5 group-hover:rotate-180 transition-transform duration-300"><path d="M19 9l-7 7-7-7"></path></svg>
                    </div>

                    {/* Mega Menu Dropdown Box */}
                    <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 w-[850px] bg-white border border-[#e7e3fa] rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-8 cursor-default">
                      <div className="grid grid-cols-3 gap-8">
                        
                        {/* Column 1: Video Editing */}
                        <div className="flex flex-col">
                          <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#e7e3fa]">
                            <h3 className="text-[17px] font-bold text-main-black">Video Editing</h3>
                            <div className="w-8 h-8 rounded-full bg-purple text-white flex items-center justify-center shadow-sm">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                          </div>
                          <ul className="space-y-3.5">
                            <li><Link to="/services" className="block text-[15px] font-medium text-paragraph hover:text-purple transition-colors">Podcast Video Editing</Link></li>
                            <li><Link to="/services" className="block text-[15px] font-medium text-paragraph hover:text-purple transition-colors">Short-Form & Reels Editing</Link></li>
                            <li><Link to="/services" className="block text-[15px] font-medium text-paragraph hover:text-purple transition-colors">Talking Head Video Editing</Link></li>
                            <li><Link to="/services" className="block text-[15px] font-medium text-paragraph hover:text-purple transition-colors">SaaS Editing Service</Link></li>
                          </ul>
                        </div>

                        {/* Column 2: Video Creation */}
                        <div className="flex flex-col border-l border-[#e7e3fa] pl-8">
                          <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#e7e3fa]">
                            <h3 className="text-[17px] font-bold text-main-black">Video Creation</h3>
                            <div className="w-8 h-8 rounded-full bg-purple text-white flex items-center justify-center shadow-sm">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                          </div>
                          <ul className="space-y-3.5">
                            <li><Link to="/services" className="block text-[15px] font-medium text-paragraph hover:text-purple transition-colors">Promo Video Editing</Link></li>
                            <li><Link to="/services" className="block text-[15px] font-medium text-paragraph hover:text-purple transition-colors">Promotional Video</Link></li>
                          </ul>
                        </div>

                        {/* Column 3: Design */}
                        <div className="flex flex-col border-l border-[#e7e3fa] pl-8">
                          <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#e7e3fa]">
                            <h3 className="text-[17px] font-bold text-main-black">Design</h3>
                            <div className="w-8 h-8 rounded-full bg-purple text-white flex items-center justify-center shadow-sm">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                          </div>
                          <ul className="space-y-3.5">
                            <li><Link to="/services" className="block text-[15px] font-medium text-paragraph hover:text-purple transition-colors">Graphics Design</Link></li>
                            <li><Link to="/services" className="block text-[15px] font-medium text-paragraph hover:text-purple transition-colors">Logo Design</Link></li>
                            <li><Link to="/services" className="block text-[15px] font-medium text-paragraph hover:text-purple transition-colors">Branding</Link></li>
                            <li><Link to="/services" className="block text-[15px] font-medium text-paragraph hover:text-purple transition-colors">UI/UX</Link></li>
                          </ul>
                        </div>

                      </div>
                    </div>
                  </li>
                  {/* --- End Services MEGA MENU --- */}

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
              <Link to="#">
                <div className="flex space-x-1.5 items-center hover:text-purple transition-all duration-300">
                  <span className="font-semibold text-main-black">Client Login</span>
                </div>
              </Link>

              {/* Start Scaling Button Fixed */}
              <Link to="/contact">
                <div className="transition-all duration-500 home-two-btn-white-rev group before:bg-white after:bg-white border border-purple bg-purple hover:border-purple rounded-full px-8 py-3 flex items-center gap-2 cursor-pointer">
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-purple font-inter py-0.5">
                    Start Scaling
                  </span>
                  <svg
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 group-hover:stroke-purple stroke-white"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
              {/* End Start Scaling Button Fixed */}

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}