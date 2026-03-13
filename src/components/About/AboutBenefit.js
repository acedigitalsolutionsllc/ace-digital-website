import React from "react";

export default function AboutBenefit() {
  return (
    <section id="benefit" className="bg-main-gray">
      <div className="benefit-section-wrapper w-full py-16 md:py-[130px]">
        <div className="mx-auto theme-container">
          <div className="w-full">
            <div className="flex flex-col items-center">
              {/* Tag changed to Brand Green with Glow Border */}
              <span className="rounded-[30px] px-5 py-1 mb-5 !bg-[#6db305]/10 font-semibold !text-[#6db305] border !border-[#6db305]/20 shadow-[0_0_10px_rgba(109,179,5,0.15)] uppercase tracking-wider text-xs">
                Why ACE Digital?
              </span>
              <h2 className="text-24 sm:text-48 font-semibold text-main-black mb-[60px] text-center max-w-[700px] leading-tight">
                Stop Disappearing in the Feed. Start Scaling Effortlessly.
              </h2>
            </div>
          </div>
          <div className="w-full grid grid-cols-6 lg:grid-cols-12 gap-5 sm:gap-[70px]">
            
            {/* Image / Video Area */}
            <div className="flex items-center justify-center col-span-6 relative">
              <img
                src="./assets/images/about/benefit-img.webp"
                alt="ACE Digital Solutions Benefits"
                className="max-w-full rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
              />
              <button
                type="button"
                aria-label="play-video"
                className="absolute flex items-center justify-center video-play-btn group"
              >
                {/* Play Button - Added Hover Glow */}
                <span className="flex size-11 sm:size-[64px] rounded-full justify-center items-center bg-white relative shadow-xl group-hover:shadow-[0_0_20px_rgba(109,179,5,0.4)] transition-shadow duration-300">
                  <span>
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:scale-110 transition-transform duration-300"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#094a66" // Play icon color changed to Brand Blue
                      />
                    </svg>
                  </span>
                  {/* Pulsing rings colors changed to Brand Blue */}
                  <div className="absolute w-full h-full rounded-full h5-play-btn-line1 border border-[#094a66]/40"></div>
                  <div className="absolute w-[130%] h-[130%] rounded-full h5-play-btn-line2 border border-[#094a66]/30"></div>
                  <div className="absolute w-[160%] h-[160%] rounded-full h5-play-btn-line3 border border-[#094a66]/10"></div>
                </span>
              </button>
            </div>

            {/* Benefits Cards Area */}
            <div className="flex items-center col-span-6">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-[30px]">
                
                {/* single card 1 */}
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  // Hover border animations changed to Brand Green with inner Glow shadow
                  className="max-w-full col-span-3 relative group before:w-full before:block before:h-full before:border before:border-[#6db305] before:rounded-[10px] before:absolute before:left-0 before:top-0 before:z-0 before:scale-0 hover:before:scale-100 hover:before:shadow-[0_0_15px_rgba(109,179,5,0.3)] before:transition-all before:duration-500 before:origin-top-left after:w-full after:block after:h-full after:border after:border-[#6db305] after:rounded-[10px] after:absolute after:left-0 after:top-0 after:z-0 after:scale-0 hover:after:scale-100 hover:after:shadow-[0_0_15px_rgba(109,179,5,0.3)] after:transition-all after:duration-500 before:ease-linear after:ease-linear after:origin-bottom-right"
                >
                  <div className="rounded-[10px] m-[1px] bg-white px-[26px] py-5 border border-transparent relative z-10 h-full flex flex-col justify-center transition-colors duration-300">
                    <h1 className="font-semibold text-18 font-inter text-main-black group-hover:text-[#094a66] transition-colors duration-300">
                      Hyper-Realistic AI Avatars
                    </h1>
                    <p className="text-paragraph text-sm mt-2">
                      Clone yourself perfectly. Deliver flawless pitches every time without the stress of constant filming.
                    </p>
                  </div>
                </div>

                {/* single card 2 */}
                <div
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  className="max-w-full col-span-3 relative group before:w-full before:block before:h-full before:border before:border-[#6db305] before:rounded-[10px] before:absolute before:left-0 before:top-0 before:z-0 before:scale-0 hover:before:scale-100 hover:before:shadow-[0_0_15px_rgba(109,179,5,0.3)] before:transition-all before:duration-500 before:origin-top-left after:w-full after:block after:h-full after:border after:border-[#6db305] after:rounded-[10px] after:absolute after:left-0 after:top-0 after:z-0 after:scale-0 hover:after:scale-100 hover:after:shadow-[0_0_15px_rgba(109,179,5,0.3)] after:transition-all after:duration-500 before:ease-linear after:ease-linear after:origin-bottom-right"
                >
                  <div className="rounded-[10px] m-[1px] bg-white px-[26px] py-5 border border-transparent relative z-10 h-full flex flex-col justify-center transition-colors duration-300">
                    <h1 className="font-semibold text-18 font-inter text-main-black group-hover:text-[#094a66] transition-colors duration-300">
                      Scroll-Stopping CGI
                    </h1>
                    <p className="text-paragraph text-sm mt-2">
                      Break the visual barrier with Hollywood-grade 3D graphics that make your brand impossible to ignore.
                    </p>
                  </div>
                </div>

                {/* single card 3 */}
                <div
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  className="max-w-full col-span-3 relative group before:w-full before:block before:h-full before:border before:border-[#6db305] before:rounded-[10px] before:absolute before:left-0 before:top-0 before:z-0 before:scale-0 hover:before:scale-100 hover:before:shadow-[0_0_15px_rgba(109,179,5,0.3)] before:transition-all before:duration-500 before:origin-top-left after:w-full after:block after:h-full after:border after:border-[#6db305] after:rounded-[10px] after:absolute after:left-0 after:top-0 after:z-0 after:scale-0 hover:after:scale-100 hover:after:shadow-[0_0_15px_rgba(109,179,5,0.3)] after:transition-all after:duration-500 before:ease-linear after:ease-linear after:origin-bottom-right"
                >
                  <div className="rounded-[10px] m-[1px] bg-white px-[26px] py-5 border border-transparent relative z-10 h-full flex flex-col justify-center transition-colors duration-300">
                    <h1 className="font-semibold text-18 font-inter text-main-black group-hover:text-[#094a66] transition-colors duration-300">
                      24/7 Automation
                    </h1>
                    <p className="text-paragraph text-sm mt-2">
                      Your digital twin works round the clock. Generate leads and sales even while you sleep.
                    </p>
                  </div>
                </div>

                {/* single card 4 */}
                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  className="max-w-full col-span-3 relative group before:w-full before:block before:h-full before:border before:border-[#6db305] before:rounded-[10px] before:absolute before:left-0 before:top-0 before:z-0 before:scale-0 hover:before:scale-100 hover:before:shadow-[0_0_15px_rgba(109,179,5,0.3)] before:transition-all before:duration-500 before:origin-top-left after:w-full after:block after:h-full after:border after:border-[#6db305] after:rounded-[10px] after:absolute after:left-0 after:top-0 after:z-0 after:scale-0 hover:after:scale-100 hover:after:shadow-[0_0_15px_rgba(109,179,5,0.3)] after:transition-all after:duration-500 before:ease-linear after:ease-linear after:origin-bottom-right"
                >
                  <div className="rounded-[10px] m-[1px] bg-white px-[26px] py-5 border border-transparent relative z-10 h-full flex flex-col justify-center transition-colors duration-300">
                    <h1 className="font-semibold text-18 font-inter text-main-black group-hover:text-[#094a66] transition-colors duration-300">
                      10+ Years Precision
                    </h1>
                    <p className="text-paragraph text-sm mt-2">
                      Backed by a decade of clinical precision, we ensure every campaign is data-driven and results-focused.
                    </p>
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