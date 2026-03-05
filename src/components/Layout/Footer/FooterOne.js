import React from "react";
import { Link } from "react-router-dom";

export default function FooterOne() {
  return (
    <footer>
      <div className="footer-one-wrapper w-full pt-[130px] bg-white border-t border-slate-100">
        <div className="mx-auto theme-container">
          <div className="w-full">
            
            {/* Top Bar (Logo & Socials) */}
            <div className="top-bar w-full flex md:flex-row md:justify-between items-center flex-col space-y-10 md:space-y-0 md:mb-[80px] mb-10">
              <div>
                <Link to="/">
                  <img 
                    src="/assets/images/ace-logo.svg"  
                    alt="ACE Digital Solutions" 
                    className="h-[200px] w-auto object-contain" 
                  />
                </Link>
              </div>
              <ul className="flex flex-wrap gap-5 md:gap-14 md:items-center">
                <li className="font-semibold text-18 hover:text-purple hover:underline common-transition text-paragraph">
                  <a href="https://www.facebook.com/ACEDigitalSolutionsLLC" target="_blank" rel="noopener noreferrer">Facebook</a>
                </li>
                <li className="font-semibold text-18 hover:text-purple hover:underline common-transition text-paragraph">
                  <a href="https://www.linkedin.com/company/110917083/admin/dashboard/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li className="font-semibold text-18 hover:text-purple hover:underline common-transition text-paragraph">
                  <a href="https://www.youtube.com/@ACEDigitalSolutionsLLC" target="_blank" rel="noopener noreferrer">YouTube</a>
                </li>
              </ul>
            </div>

            {/* Main Footer Content */}
            <div className="w-full py-[80px] border-t border-[#e7e3fa] grid xl:grid-cols-12 md:grid-cols-3 md:gap-10 grid-cols-2 gap-8">
              
              {/* Address & Contact */}
              <div className="xl:col-span-3">
                <div className="w-full mb-10">
                  <p className="text-main-black text-18 font-semibold mb-[30px]">
                    Address
                  </p>
                  <p className="font-medium text-paragraph">
                    Based in the US <br />
                    Serving Healthcare & Retail Brands Globally
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-main-black text-18 font-semibold mb-[30px]">
                    Contact
                  </p>
                  <p className="font-medium text-paragraph">
                    <a href="mailto:info@aceavatars.com" className="hover:text-purple transition-colors">
                      info@aceavatars.com
                    </a> <br />
                    <a href="mailto:joe@aceavatars.com" className="hover:text-purple transition-colors">
                      joe@aceavatars.com
                    </a> <br />
                    <a href="tel:+17252223947" className="hover:text-purple transition-colors">
                      (725) 222-3947
                    </a>
                  </p>
                </div>
              </div>

              {/* Updated Services */}
              <div className="xl:col-span-3">
                <div className="w-full">
                  <p className="text-main-black text-18 font-semibold mb-[30px]">
                    Our Services
                  </p>
                  <ul className="flex flex-col space-y-3">
                    <li className="font-medium hover:text-purple hover:-translate-y-0.5 common-transition text-paragraph">
                      <Link to="/services">Podcast Video Editing</Link>
                    </li>
                    <li className="font-medium hover:text-purple hover:-translate-y-0.5 common-transition text-paragraph">
                      <Link to="/services">Short-Form & Reels</Link>
                    </li>
                    <li className="font-medium hover:text-purple hover:-translate-y-0.5 common-transition text-paragraph">
                      <Link to="/services">Promo Video Creation</Link>
                    </li>
                    <li className="font-medium hover:text-purple hover:-translate-y-0.5 common-transition text-paragraph">
                      <Link to="/services">SaaS Editing Service</Link>
                    </li>
                    <li className="font-medium hover:text-purple hover:-translate-y-0.5 common-transition text-paragraph">
                      <Link to="/services">Graphics & Branding</Link>
                    </li>
                    <li className="font-medium hover:text-purple hover:-translate-y-0.5 common-transition text-paragraph">
                      <Link to="/services">UI/UX Design</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quick Links / Company */}
              <div className="xl:col-span-3">
                <div className="w-full">
                  <p className="text-main-black text-18 font-semibold mb-[30px]">
                    Quick Links
                  </p>
                  <ul className="flex flex-col space-y-3">
                    <li className="font-medium hover:text-purple hover:-translate-y-0.5 common-transition text-paragraph">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="font-medium hover:text-purple hover:-translate-y-0.5 common-transition text-paragraph">
                      <Link to="/founder">Meet the Founder</Link>
                    </li>
                    <li className="font-medium hover:text-purple hover:-translate-y-0.5 common-transition text-paragraph">
                      <Link to="/" state={{ category: "All" }}>Our Works (Portfolio)</Link>
                    </li>
                    <li className="font-medium hover:text-purple hover:-translate-y-0.5 common-transition text-paragraph">
                      <Link to="/pricing">Pricing Plans</Link>
                    </li>
                    <li className="font-medium hover:text-purple hover:-translate-y-0.5 common-transition text-paragraph">
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="font-medium hover:text-purple hover:-translate-y-0.5 common-transition text-paragraph">
  <Link to="/referral-program">Referral Program</Link>
</li>
<li className="font-medium hover:text-purple hover:-translate-y-0.5 common-transition text-paragraph">
  <Link to="/cart">Build Your Package</Link>
</li>
                  </ul>
                </div>
              </div>

              {/* Newsletter */}
              <div className="col-span-2 xl:col-span-3 md:col-span-1">
                <div className="w-full mb-10">
                  <p className="text-main-black text-18 font-semibold mb-[30px]">
                    Newsletter
                  </p>
                  <p className="font-medium text-paragraph mb-[30px]">
                    Subscribe to get the latest digital growth strategies.
                  </p>
                  <div className="mb-3">
                    <input
                      placeholder="Email Address"
                      className="placeholder:text-paragraph typewriter-input w-full h-[56px] bg-main-gray border border-[#e7e3fa] focus:border-purple focus:outline-none rounded-full px-[25px]"
                      type="email"
                    />
                  </div>

                  <Link to="#">
                    {/* Fixed Subscribe Button */}
                    <div className="transition-all duration-500 home-two-btn-white-rev group before:bg-white after:bg-white border border-purple bg-purple hover:border-purple rounded-full w-full justify-center px-8 py-3 flex items-center gap-2 mt-2">
                      <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-purple font-inter py-0.5">
                        Subscribe
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
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          style={{
            backgroundImage: "linear-gradient( 90deg, #794aff 0%, #f3f4f9 63.23%)",
          }}
          className="w-full md:h-[65px] h-12 flex items-center"
        >
          <div className="h-full mx-auto theme-container w-full px-5 md:px-0">
            <div className="flex items-center justify-between w-full h-full text-xs md:text-base">
              <span className="text-white font-medium">
                {new Date().getFullYear()} © All rights reserved by <b>ACE Digital Solutions</b>
              </span>
              
              {/* Back to Top Button */}
              <div className="relative hidden md:block">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  aria-label="go top"
                  className="w-[45px] h-[45px] rounded-full border-[3px] border-white flex justify-center items-center bg-blue-sass hover:bg-purple transition-colors duration-300 absolute -top-[55px] shadow-lg"
                >
                  <span>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="22.5" r="21" fill="transparent" stroke="white" strokeWidth="3" />
                      <path d="M19 21L23 17M23 17L27 21M23 17V29" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>

              <ul className="items-center hidden md:space-x-6 md:flex">
                <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph cursor-pointer">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="font-medium text-paragraph">|</li>
                <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph cursor-pointer">
                  <Link to="/terms">Terms & Conditions</Link> 
                </li>
                <li className="font-medium text-paragraph">|</li>
                <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph cursor-pointer">
                  <Link to="/refund-policy">Refund Policy</Link> 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}