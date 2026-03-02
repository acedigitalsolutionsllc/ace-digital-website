import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import { Link } from "react-router-dom";

export default function AboutOne() {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (sceneRef.current) {
      const parallaxInstance = new Parallax(sceneRef.current);
      return () => {
        parallaxInstance.disable();
      };
    }
  }, []);

  return (
    <section id="home-one-about">
      <div className="home-one-about-wrapper w-full xl:pb-[153px] pb-[60px] pt-[80px]">
        <div className="mx-auto theme-container max-w-7xl px-6 lg:px-8">
          {/* Grid Layout: Stacks on mobile, Side-by-side on PC */}
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 md:gap-[80px] gap-[50px] lg:items-center relative">
            
            {/* --- Left Side: Parallax Image Area --- */}
            <div className="w-full about-thumbnil-area order-2 lg:order-1">
              <div
                data-aos="fade-right"
                className="lg:absolute relative lg:-left-10 left-0 top-0 lg:w-[550px] w-full flex justify-center lg:block"
              >
                
                {/* Background Shape (Hidden on mobile for clean look) */}
                <div ref={sceneRef} id="about-shape-mouse-anim" className="hidden lg:block">
                  <div data-depth="0.20" className="layer">
                    <div
                      data-aos="fade-right"
                      className="thumbnil-wrapper"
                    >
                      <img
                        src="./assets/images/home-one-about-thumb-shape.webp"
                        alt="Background Shape"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Main Image - Fixed Size & Responsive */}
                <div
                  data-aos="fade-up"
                  className="relative lg:absolute lg:-bottom-16 left-0 w-full md:w-[80%] lg:w-full z-10"
                >
                  <div className="flex justify-center w-full">
                    <img
                      src="./assets/images/ace-about-main.png"
                      alt="Joseph Montemorano Working"
                      className="w-full lg:w-[90%] h-[400px] md:h-[500px] lg:h-[600px] object-cover object-top rounded-[30px] shadow-2xl border-4 border-white"
                    />
                  </div>
                </div>

                {/* Floating Parallax Elements (Hidden on very small screens) */}
                <div className="w-full sm:block hidden absolute left-0 top-0 h-full z-20">
                  <div
                    ref={sceneRef}
                    id="home-one-about-mouse-anim"
                    className="h-full relative"
                  >
                    <div
                      className="absolute layer left-[70%] top-[20%] lg:left-[80%] lg:top-[25%]"
                      data-depth="0.30"
                    >
                      <div
                        data-aos="fade-left"
                        data-aos-delay="100"
                        className="inline-block h-fit px-[20px] py-2.5 bg-purple text-xs md:text-sm font-bold shadow-glass shadow-purple/30 text-white rounded-full rounded-bl-none"
                      >
                        <i className="fas fa-robot mr-2"></i> AI Avatar Active
                      </div>
                    </div>
                    
                    <div
                      data-depth="0.50"
                      className="absolute bottom-[-20px] lg:bottom-[5%] layer left-[20%] lg:left-[40%]"
                    >
                      <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        className="w-fit flex justify-between p-2 pl-4 pr-3 bg-white shadow-xl rounded-full items-center border border-slate-100 gap-3"
                      >
                        <span className="text-xs md:text-sm font-bold text-ace-dark whitespace-nowrap">
                          77k+ Participants
                        </span>
                        <img
                          src="/assets/images/home-one-about-group.webp"
                          alt="Clients"
                          className="h-7 md:h-8"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* --- Right Side: Content & Services --- */}
            <div className="about-article-area z-10 relative order-1 lg:order-2">
              <span className="inline-block py-1.5 px-4 rounded-full bg-purple/10 text-purple font-bold text-[11px] sm:text-xs uppercase tracking-widest mb-5 border border-purple/20">
                The Architecture of Success
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-montserrat text-main-black mb-[25px] md:mb-[35px] leading-[1.2]">
                Hyper-Realistic AI & <br className="hidden sm:block"/> CGI Marketing That Scales.
              </h2>
              
              <p className="text-base md:text-lg text-paragraph mb-[30px] md:mb-[40px] font-sans leading-relaxed">
                Where 10+ years of clinical precision meets cutting-edge digital innovation. Joseph Montemorano doesn't just build marketing strategies; he architects <strong>24/7 digital clones</strong> and jaw-dropping visual assets that do the selling for you.
              </p>
              
              {/* Services List (Grid Layout) */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-[40px] md:mb-[50px]">
                <li className="flex space-x-3 items-center text-main-black font-semibold px-4 md:px-5 py-3 md:py-4 bg-white shadow-sm border border-[#e7e3fa] rounded-xl hover:border-purple hover:shadow-md transition-all duration-300">
                  <span className="text-purple text-lg md:text-xl"><i className="fas fa-user-astronaut"></i></span>
                  <span className="font-sans text-sm md:text-base">AI Clone Avatars</span>
                </li>
                <li className="flex space-x-3 items-center text-main-black font-semibold px-4 md:px-5 py-3 md:py-4 bg-white shadow-sm border border-[#e7e3fa] rounded-xl hover:border-purple hover:shadow-md transition-all duration-300">
                  <span className="text-purple text-lg md:text-xl"><i className="fas fa-video"></i></span>
                  <span className="font-sans text-sm md:text-base">CGI Advertising</span>
                </li>
                <li className="flex space-x-3 items-center text-main-black font-semibold px-4 md:px-5 py-3 md:py-4 bg-white shadow-sm border border-[#e7e3fa] rounded-xl hover:border-purple hover:shadow-md transition-all duration-300">
                  <span className="text-purple text-lg md:text-xl"><i className="fas fa-chart-line"></i></span>
                  <span className="font-sans text-sm md:text-base">Social Media Growth</span>
                </li>
                <li className="flex space-x-3 items-center text-main-black font-semibold px-4 md:px-5 py-3 md:py-4 bg-white shadow-sm border border-[#e7e3fa] rounded-xl hover:border-purple hover:shadow-md transition-all duration-300">
                  <span className="text-purple text-lg md:text-xl"><i className="fas fa-briefcase-medical"></i></span>
                  <span className="font-sans text-sm md:text-base">Healthcare Education</span>
                </li>
              </ul>
              
              {/* Call to Action Button */}
              <Link to="/contact">
                <div className="inline-flex py-3 md:py-3.5 px-6 md:px-8 bg-purple text-white rounded-full font-bold shadow-purple hover:bg-main-black hover:shadow-none transition-all duration-300 cursor-pointer items-center gap-2 group w-full sm:w-auto justify-center">
                  <span className="font-montserrat uppercase tracking-wide text-xs md:text-sm">
                    Start Your Project
                  </span>
                  <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}