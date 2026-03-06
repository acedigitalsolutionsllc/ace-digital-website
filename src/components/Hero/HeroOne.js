import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import WinGrid from "./WinGrid";
import { Link } from "react-router-dom";

export default function HeroOne() {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (sceneRef.current) {
      const parallaxInstance = new Parallax(sceneRef.current);
      // Cleanup the parallax instance on component unmount
      return () => {
        parallaxInstance.disable();
      };
    }
  }, []);

  return (
    <section id="home-one-hero">
      <div className="hero-one-section-wrapper w-full xl:h-[905px] overflow-hidden relative">
        <WinGrid />
        <div className="relative z-10 h-full mx-auto pointer-events-none theme-container">
          <div className="w-full grid xl:grid-cols-2 grid-cols-1 2xl:gap-[130px] gap-10 items-center lg:pt-[223px] pt-[130px] h-full">
            <div className="article-area">
              <div className="inline-flex md:px-6 px-3 py-2.5 md:py-[14px] bg-white space-x-2.5 items-center rounded-full shadow-style-one mb-5">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_460_7967)">
                      <path
                        d="M10.0005 10.9371L0.0507812 7.62184C0.132029 7.4156 0.3164 7.26529 0.535144 7.23435L6.68811 6.32812L10.0005 10.9371Z"
                        fill="#FEC461"
                      />
                      <path
                        d="M10.0002 10.937V16.6775L4.49725 19.6149C4.28475 19.7274 4.03195 19.709 3.83789 19.5649L10.0002 10.937Z"
                        fill="#F7B84E"
                      />
                      <path
                        d="M10.0005 10.937L3.83784 19.5646C3.64753 19.4243 3.55035 19.1837 3.59128 18.9431L4.64094 12.7248L10.0005 10.937Z"
                        fill="#FEC461"
                      />
                      <path
                        d="M10 10.9368L4.64079 12.7246L0.190595 8.31813C0.0190365 8.14938 -0.0437743 7.89595 0.0312237 7.66814C0.0377861 7.65252 0.0405985 7.63658 0.0502858 7.62158L10 10.9368Z"
                        fill="#F7B84E"
                      />
                      <path
                        d="M9.99992 0.312012V10.9367L6.6875 6.32748L9.44055 0.665128C9.54368 0.449196 9.76242 0.312012 9.99992 0.312012Z"
                        fill="#FEC461"
                      />
                      <path
                        d="M13.3124 6.32748L10 10.9367V0.312012C10.2375 0.312012 10.4562 0.449196 10.5594 0.665128L13.3124 6.32748Z"
                        fill="#F7B84E"
                      />
                      <path
                        d="M19.9497 7.62167L10 10.9369L13.3124 6.32764L19.4654 7.23386C19.6841 7.26511 19.8685 7.41511 19.9497 7.62167Z"
                        fill="#FEC461"
                      />
                      <path
                        d="M19.8123 8.31813L15.3592 12.7246L10 10.9368L19.9497 7.62158C19.9591 7.63689 19.9622 7.65283 19.9688 7.66814C20.0435 7.89626 19.981 8.14938 19.8123 8.31813Z"
                        fill="#F7B84E"
                      />
                      <path
                        d="M16.1623 19.5646L10 10.937L15.3592 12.7248L16.4092 18.9431C16.4498 19.184 16.353 19.4243 16.1623 19.5646Z"
                        fill="#FEC461"
                      />
                      <path
                        d="M16.1623 19.5646C15.9686 19.7087 15.7155 19.7274 15.5033 19.6146L10 16.6775V10.937L16.1623 19.5646Z"
                        fill="#F7B84E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_460_7967">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                {/* Changed Text color to #094a66 */}
                <span className="text-sm font-semibold pointer-events-auto md:text-20 text-[#094a66]">
                  Welcome to ACE Digital
                </span>
              </div>
              <h2 className="text-4xl md:text-65 text-main-black font-semibold mb-[35px] pointer-events-auto leading-tight">
                <span>Stop Disappearing</span> <br />
                In The
                <span className="relative inline-block px-3 font-bold text-white uppercase ml-2">
                  <span className="relative z-10">Feed.</span>
                  {/* Changed background gradient to #6db305 */}
                  <span className="absolute top-0 left-0 block w-full h-full bg-gradient-to-r from-[#6db305] to-[#6db305]"></span>
                </span>
              </h2>
              {/* Changed border color to #094a66 */}
              <div className="px-6 py-[14px] bg-white border-l-2 border-[#094a66] mb-[35px] pointer-events-auto xl:w-full md:w-[500px]">
                <p className="text-ptwo text-paragraph">
                  Replace traditional, stressful video production with hyper-realistic AI Avatars and jaw-dropping CGI ads. Clone yourself and scale your business effortlessly 24/7.
                </p>
              </div>
              <div className="flex space-x-[30px] items-center pointer-events-auto">
                
                {/* --- Updated Button Link (submit-assets) with Brand Colors & Glow --- */}
                <Link to="/submit-assets">
                  <div className="transition-all duration-500 home-two-btn-white-rev group before:bg-white after:bg-white border border-[#094a66] bg-[#094a66] hover:border-[#6db305] hover:shadow-[0_0_20px_rgba(109,179,5,0.4)] rounded-full px-8 py-3 flex items-center gap-2">
                    {/* Hover text color changed to #094a66 */}
                    <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-[#094a66] font-inter py-0.5">
                      Start a project
                    </span>
                    <svg
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Hover stroke color changed to #094a66 */}
                      <path
                        className="transition-all duration-300 group-hover:stroke-[#094a66] stroke-white"
                        d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                {/* --- End Updated Button --- */}

                <Link to="/services">
                  <div className="flex items-center gap-2 group">
                    {/* Hover text and underline color changed to #094a66 */}
                    <p className="mb-[1px] font-medium text-main-black leading-5 font-inter border-b border-main-black before:block before:pb-[1px] before:border-[#094a66] before:font-medium before:text-[#094a66] before:leading-5 before:font-inter before:border-b before:content-['Explore_Services'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                      Explore Services
                    </p>
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Hover stroke color changed to #094a66 */}
                      <path
                        className="transition-all duration-300 delay-300 group-hover:stroke-[#094a66]"
                        d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                        stroke="#101828"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative h-full image-area">
              <div className="xl:absolute relative 2xl:w-[752px] lg:w-[600px] w-full left-0 top-0 h-full">
                {/* */}
                <div className="relative bottom-0 left-0 z-10 w-full xl:absolute">
                  <div className="flex justify-center w-full">
                    {/* এখানে আপনার জেনারেট করা জোসেফের ছবিটি বসানো হয়েছে */}
                    <img src="/assets/images/joe-hero.png" alt="Joseph Montemorano" />
                  </div>
                </div>
                {/* */}
                <div className="absolute bottom-0 left-0 hidden w-full h-full md:block">
                  <div
                    ref={sceneRef}
                    id="hero-mouse-move-anim"
                    className="relative z-10 w-full h-full pointer-events-auto"
                  >
                    {/* Parallax Floating Items - Colors Changed to match your brand */}
                    <div data-depth="0.20" className="layer">
                      {/* Brand Blue */}
                      <span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-[#094a66] 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-br-none rounded-full">
                        AI Avatar Clones
                      </span>
                    </div>
                    <div data-depth="0.30" className="layer">
                      {/* Brand Green */}
                      <span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-[#6db305] 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-full rounded-bl-none">
                        CGI Advertising
                      </span>
                    </div>
                    <div data-depth="0.40" className="layer h-fit">
                      {/* Secondary Brand Color (if any) or staying with Orange for contrast */}
                      <span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-[#FF8C05] 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-br-none rounded-full h-fit">
                        24/7 Automation
                      </span>
                    </div>
                    <div data-depth="0.50" className="layer h-fit">
                      {/* Deep Blue */}
                      <span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-[#094a66] 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-full rounded-bl-none h-fit">
                        77k+ Reached
                      </span>
                    </div>
                  </div>
                </div>
                {/* */}
                <div className="absolute left-0 bottom-[100px] w-full md:block hidden">
                  <div className="flex justify-center">
                    <div className="w-[533px] h-[585px] bg-white rounded-[266px]"></div>
                  </div>
                </div>
                {/* */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                  <div className="flex justify-center">
                    <img
                      src="/assets/images/home-one-hero-circle-shadow.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}